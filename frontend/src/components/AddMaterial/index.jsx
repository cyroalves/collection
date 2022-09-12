import React, { useContext } from "react";
import { FormModalContext } from "../../context/FormModalContext";
import { EditingMaterialContext } from "../../context/EditingMaterialContext";

import { AddMaterialButton, AddIcon } from "./styles";

export default function AddMaterial() {
  const { openFormModal, setTitle, setLink } = useContext(FormModalContext);
  const { setEditingMaterial } = useContext(EditingMaterialContext);

  function handleAdd() {
    setTitle("");
    setLink("");
    setEditingMaterial(false);
    openFormModal();
  }

  return (
    <li>
      <AddMaterialButton onClick={handleAdd}>
        <AddIcon />
      </AddMaterialButton>
    </li>
  );
}
