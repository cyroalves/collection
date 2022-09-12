import React, { useState } from "react";
import AddMaterial from "../AddMaterial";
import { useAxios } from "../../hooks/useAxios";
import Material from "../Material";
import { Container, MaterialListWrapper, StyledInput } from "./styles";

export default function MaterialList() {
  const { data } = useAxios(`materials`);
  const [ searchTerm, setSearchTerm ] = useState('');
  console.log(data)

  return (
    <Container>
    <label htmlFor="busca">Busca</label>
          <StyledInput
            type="text"
            name="busca"
            onChange={(ev) => setSearchTerm(ev.target.value)}
          />
        <AddMaterial />
      <MaterialListWrapper>
        {data?.materials.filter((mat) => {
          if (searchTerm ==  "") { return mat
          } else if (mat.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return mat
          } else if (mat.description.toLowerCase().includes(searchTerm.toLowerCase())){
            return mat
          }
        } ).map((material) => (
          <Material
            key={material._id ? material._id : Math.random()}
            id={material._id}
            title={material.title}
            link={material.link}
            description={material.description}
            line={material.line}
          />
        ))}
      </MaterialListWrapper>
    </Container>
  );
}
