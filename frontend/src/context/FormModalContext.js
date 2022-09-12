import { createContext, useContext, useState } from "react";
import FormModal from "../components/FormModal";
import { useAxios } from "../hooks/useAxios";
import api from "../services/api";
import { EditingMaterialContext } from "./EditingMaterialContext";

export const FormModalContext = createContext();

export function FormModalProvider({ children }) {
  const { data, mutate } = useAxios("materials");

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [line, setLine] = useState("");
  const [description, setDescription] = useState("");
  const [isFormModalUp, setIsFormModalUp] = useState(false);

  const { editingMaterial } = useContext(EditingMaterialContext);

  function handleEditMode(materialTitle, materialLink) {
    setTitle(materialTitle);
    setLink(materialLink);
    openFormModal();
  }

  function submitForm(e) {
    e.preventDefault();

    if (editingMaterial) {
      api.put(`materials/${editingMaterial}`, {
        title,
        link,
      });

      const updatedMaterials = {
        materials: data.materials?.map((material) => {
          debugger
          if (material._id === editingMaterial) {
            return { ...material, title, link, description, line };
          }
          return material;
        }),
      };

      mutate(updatedMaterials, false);
    } else {
      const material = {
        title,
        link,
        description,
        line
      };
      api.post("materials", material);

      const updatedMaterials = {
        materials: [...data.materials, material],
      };

      mutate(updatedMaterials, false);
    }

    closeFormModal();
  }

  function openFormModal() {
    setIsFormModalUp(true);
  }

  function closeFormModal() {
    setIsFormModalUp(false);
  }

  return (
    <FormModalContext.Provider
    value={{
      isFormModalUp,
        setIsFormModalUp,
        openFormModal,
        closeFormModal,
        handleEditMode,
        title,
        setTitle,
        link,
        setLink,
        description,
        setDescription,
        line,
        setLine,
        submitForm,
    }}
    >
      {children}
      {isFormModalUp && <FormModal />}
    </FormModalContext.Provider>
  );
}
