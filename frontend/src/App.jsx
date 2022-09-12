import React from "react";
import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";
import { FormModalProvider } from "./context/FormModalContext";
import { EditingMaterialProvider } from "./context/EditingMaterialContext";

export default function App() {
  return (
    <>
      <EditingMaterialProvider>
        <FormModalProvider>
          <Layout />
        </FormModalProvider>
      </EditingMaterialProvider>
      <GlobalStyles />
    </>
  );
}
