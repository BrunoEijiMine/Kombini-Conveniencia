import React from "react";
import { Container, TituloContainer} from "../Products/productsStyles";
import { CardProdutos }  from "../Card/card";

export default function Products() {
  return (
    <Container>
      <TituloContainer>
        <h1>PRODUTOS</h1>
        <p>Aqui está um dos nossos produtos disponíveis em nossa conveniência.</p>
      </TituloContainer>
      <CardProdutos />
    </Container>
  );
}
