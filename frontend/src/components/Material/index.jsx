import React, { useContext, useState } from "react";

import { IoTrashBin, IoPencil } from "react-icons/io5";
import { EditingMaterialContext } from "../../context/EditingMaterialContext";
import { FormModalContext } from "../../context/FormModalContext";
import { useAxios } from "../../hooks/useAxios";
import MaterialTooltip from '@material-ui/core/Tooltip';

import api from "../../services/api";

import { Container, ButtonArea, Button } from "./styles";

export default function Material({ id, title, link, description, line }) {
  const { handleEditMode } = useContext(FormModalContext);
  const { setEditingMaterial } = useContext(EditingMaterialContext);

  const { data, mutate } = useAxios("materials");

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function handleDelete() {
    api.delete(`/materials/${id}`);

    const updatedMaterials = {
      materials: data.materials?.filter((material) => material._id !== id),
    };

    mutate(updatedMaterials, false);
  }

  function handleEdit() {
    handleEditMode(title, link);
    setEditingMaterial(id);
  }

  return (
    <li key={id}>
      <Container>
        <h2>{title}</h2>
        <img src={link} height={200} width={200} alt="description"/><br />
        <p>{line}</p>
    <MaterialTooltip title={description}>
        <p>{description}</p>
    </MaterialTooltip>
        <ButtonArea>
          <Button onClick={handleEdit}>
            <IoPencil />
          </Button>
          <Button onClick={handleDelete}>
            <IoTrashBin />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
}
