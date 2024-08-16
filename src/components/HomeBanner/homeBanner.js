import React from "react";
import { Container, Banner, Title } from "../HomeBanner/homeBannerStyles";

export default function HomeBanner() {
  return (
    <Container>
      <Banner />
      <Title>
        <span>Bem-vindo ao seu </span> espaço
        <br />
        <span>de</span> conveniência <span>e</span> <span className="textBold">sabor!</span>
      </Title>
    </Container>
  );
}
