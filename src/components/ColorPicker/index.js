import { useState, useEffect } from "react";
//icon
import PageIcon from "../../images/icon.png";
import { MdContentCopy } from "react-icons/md";
import { GrClear } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import "eyedropper-polyfill";
import { SketchPicker } from "react-color";

import {
  Navigation,
  FlexRow,
  FlexColumn,
  MainContent,
  PickBtn,
  ColorDisplay,
  ColorDisplayItem,
  RecentColorsContainer,
} from "./styledComponents";

function ColorPicker() {
  const [currentColor, setCurrentColor] = useState("#00ff00");
  const [rgbColor, setRgbColor] = useState({ r: 0, g: 255, b: 0, a: 1 });
  const [colorTypesList, setColorTypesList] = useState([]);
  const [recentColors, setRecentColors] = useState([]);
  const [copyButtonIcons, setCopyButtonIcons] = useState({});

  const eyeDropper = new window.EyeDropper();

  const handleEyeDropper = () => {
    eyeDropper
      .open()
      .then((color) => {
        const alphaValue = 1;
        const rgbaValue = hexToRgba(color.sRGBHex, alphaValue);

        setCurrentColor(color.sRGBHex);
        setRgbColor(rgbaValue);

        const recentColorData = { hex: color.sRGBHex, rgba: rgbaValue };

        localStorage.setItem(
          "dynamicColorPicker",
          JSON.stringify([recentColorData, ...recentColors])
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const hexToRgba = (hex, alpha) => {
    const hexValue = hex.replace("#", "");
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
    const rgbaValue = { r, g, b, a: alpha };
    return rgbaValue;
  };

  useEffect(() => {
    const recentColorData = JSON.parse(
      localStorage.getItem("dynamicColorPicker")
    );
    if (recentColorData) {
      setRecentColors(recentColorData);
    }

    const colorsData = [
      { label: "HEX", value: currentColor },
      {
        label: "RGB",
        value: `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`,
      },
      {
        label: "RGBA",
        value: `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b},${rgbColor.a})`,
      },
    ];

    setColorTypesList(colorsData);
  }, [currentColor, rgbColor]);

  const handleCopyClick = (value, index) => {
    navigator.clipboard.writeText(value);

    setCopyButtonIcons((prevIcons) => ({
      ...prevIcons,
      [index]: <GiCheckMark />,
    }));

    setTimeout(() => {
      setCopyButtonIcons((prevIcons) => ({
        ...prevIcons,
        [index]: <MdContentCopy />,
      }));
    }, 1000);
  };

  return (
    <>
      <Navigation>
        <img className="page-logo" src={PageIcon} alt="Page Icon" />
        <h1 className="page-title m-0 ml-2 ">Dynamic Color Picker</h1>
      </Navigation>
      <FlexRow>
        <FlexColumn>
          <SketchPicker
            presetColors={[]}
            color={currentColor}
            onChange={(color) => {
              setCurrentColor(color.hex);
              setRgbColor(color.rgb);
            }}
          />
        </FlexColumn>

        <MainContent>
          <PickBtn
            type="button"
            className="pick-btn"
            onClick={handleEyeDropper}
          >
            Pick Color From Browser
          </PickBtn>
          <ColorDisplay>
            {colorTypesList.map((eachColorItem, index) => (
              <ColorDisplayItem key={index}>
                <label>{eachColorItem.label}</label>
                <div>
                  <span style={{ backgroundColor: eachColorItem.value }}></span>
                  <div>
                    <input type="text" value={eachColorItem.value} readOnly />
                    <button
                      type="button"
                      className="pick-btn"
                      onClick={() =>
                        handleCopyClick(eachColorItem.value, index)
                      }
                    >
                      {copyButtonIcons[index] || <MdContentCopy />}
                    </button>
                  </div>
                </div>
              </ColorDisplayItem>
            ))}
          </ColorDisplay>
        </MainContent>
      </FlexRow>
      <RecentColorsContainer>
        <h1>Recent Colors</h1>
        <ul>
          {recentColors === null || recentColors.length === 0 ? (
            <p>No recent colors</p>
          ) : (
            <>
              <button
                type="button"
                title="Clear recent colors"
                onClick={() => {
                  localStorage.setItem(
                    "dynamicColorPicker",
                    JSON.stringify([])
                  );
                  setRecentColors([]);
                }}
              >
                <GrClear />
              </button>
              {recentColors.slice(0, 10).map((eachColor, index) => (
                <li key={index} style={{ backgroundColor: eachColor.hex }}>
                  <button
                    className="recent-color-item"
                    onClick={() => {
                      setCurrentColor(eachColor.hex);
                      setRgbColor(eachColor.rgba);
                    }}
                  ></button>
                </li>
              ))}
            </>
          )}
        </ul>
      </RecentColorsContainer>
    </>
  );
}

export default ColorPicker;
