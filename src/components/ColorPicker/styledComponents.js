import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 15px;

  img {
    width: 30px;
  }

  h1 {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 15px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 15px;
`;
export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 10px;
`;

export const PickBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: 500;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.01),
    rgba(0, 0, 0, 0.08)
  );
`;

export const ColorDisplay = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ColorDisplayItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 10px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.7);
  }

  div {
    display: flex;
    gap: 5px;

    span {
      flex-shrink: 0;
      width: 38px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.4);
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      padding: 3px;
      border-radius: 4px;
    }

    input {
      flex-grow: 1;
      border: none;
      outline: none;
      background-color: transparent;
      font-size: 11px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    button {
      border: none;
      outline: none;
      padding: 5px 10px;
      border-radius: 2px;

      svg {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
`;

export const RecentColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h1 {
    font-size: 14px;
    margin: 10px 0px;
  }

  ul {
    padding-left: 0px;
    display: flex;
    gap: 6px;
  }

  li {
    list-style: none;
    width: 35px;
    height: 35px;
    border-radius: 50px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  button {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: rgba(0, 0, 0, 0.06);

    svg {
      font-size: 22px;
      color: red;
    }
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.4);
  }
`;
