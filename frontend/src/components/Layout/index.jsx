import React from "react";

import Header from "../Header";
import MaterialList from "../MaterialList";
import Footer from "../Footer";

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <MaterialList />
      <Footer />
    </Container>
  );
}
