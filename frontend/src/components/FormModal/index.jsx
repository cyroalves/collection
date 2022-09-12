import React, { useContext } from "react";
import { EditingMaterialContext } from "../../context/EditingMaterialContext";
import { FormModalContext } from "../../context/FormModalContext";

import {
  Overlay,
  Container,
  Header,
  CloseIcon,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CheckIcon,
} from "./styles";

export default function FormModal() {
  const {
    closeFormModal,
    submitForm,
    title,
    setTitle,
    link,
    setLink,
    description,
    setDescription,
    line,
    setLine
  } = useContext(FormModalContext);

  const { editingMaterial } = useContext(EditingMaterialContext);

  function titleHandler(e) {
    setTitle(e.target.value);
  }

  function linkHandler(e) {
    setLink(e.target.value);
  }

  function descriptionHandler(e) {
    setDescription(e.target.value);
  }

  function lineHandler(e) {
    setLine(e.target.value);
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>{editingMaterial ? "Edit material" : "Add a material"}</strong>
          <button onClick={closeFormModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                placeholder="Insert a title"
                onChange={titleHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="title">Link</label>
              <input
                id="link"
                type="text"
                value={link}
                placeholder="Insert a link"
                onChange={linkHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="description"
                value={description}
                placeholder="Insert a description"
                onChange={descriptionHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="description">Line</label>
              <input
                id="line"
                type="line"
                value={line}
                placeholder="Insert a line"
                onChange={lineHandler}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button onClick={submitForm}>
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
