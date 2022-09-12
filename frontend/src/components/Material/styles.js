import styled from "styled-components";

export const Container = styled.div`
  /* list-style: none; */
  background: #ffffff;
  padding: 10px;
  height: 400px;
  width: 350px;

  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > h2 {
    color: #1e1e1e;
  }

  & > p {
    border-left: 3px solid #bbbbbb;
    padding-left: 10px;
    max-width: 230px;

    color: #999999;
    font-style: italic;
    align-self: start;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  transition: opacity 0.2s;

  & svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.6);
  position: absolute;
  heigh: 30em;
  width: 10em;
  display: flex;
  justify-content: space-between;
`;
