import styled from "styled-components";

import { IoAdd } from "react-icons/io5";

export const AddMaterialButton = styled.button`
  list-style: none;
  border: 5px dashed #ffffff;
  background-color: rgba(0, 0, 0, 0.08);
  padding: 1em;
  height: 4em;
  width: 4em;
  cursor: pointer;

  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const AddIcon = styled(IoAdd)`
  stroke: #ffffff;
  width: 4em;
  height: 4em;
`;
