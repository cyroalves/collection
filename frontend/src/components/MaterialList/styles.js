import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  justify-content: center;
  align-items: center;
`;

export const sharedStyles = css`
  background-color: #eeeee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const MaterialListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  justify-self: center;
  max-width: 1000px;

  flex-wrap: wrap;
  gap: 10px;
`;
export const StyledInput = styled.input`
  display: block;
  width: 20em;
  ${sharedStyles}
`;
