import { createContext, useState } from "react";

export const EditingMaterialContext = createContext();

export function EditingMaterialProvider({ children }) {
  const [editingMaterial, setEditingMaterial] = useState(false);

  return (
    <EditingMaterialContext.Provider value={{ editingMaterial, setEditingMaterial }}>
      {children}
    </EditingMaterialContext.Provider>
  );
}
