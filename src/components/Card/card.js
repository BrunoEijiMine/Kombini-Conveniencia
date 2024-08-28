import React from "react";
import { Container, TituloContainer, ContainerCard, Card, BackgroundCard, DescriptionCard } from "../Card/cardStyles";
import { useNavigate } from 'react-router-dom';

import bgCafe from "../../assets/img/cafe.png"
import bgPao from "../../assets/img/pao.png"
import bgPaoQueijo from "../../assets/img/pao-queijo.png"
import bgMisto from "../../assets/img/misto.png"

const CardComponent = ({ title, description, onClick, img }) => {
    return (
        <Card onClick={onClick}>
            <BackgroundCard src={img} alt="Background card" />
            <DescriptionCard>
                <h2>{title}</h2>
                <p>{description}</p>
            </DescriptionCard>
        </Card>
    );
}

export const CardProdutos = () => {
    // const navigate = useNavigate();

    // Função para lidar com o clique no card
    const handleCardClick = () => {
        // navigate(''); // Aqui vai a rota
    };

    const cafe = {
        img: bgCafe,
        title: 'Café',
        description: 'R$1.50 - Dose',
    };

    const pao = {
        img: bgPao,
        title: 'Pão francês',
        description: 'R$10.00 - Kg',
    };

    const paoQueijo = {
        img: bgPaoQueijo,
        title: 'Pão de Queijo',
        description: 'R$3.00 - Und',
    };

    const misto = {
        img: bgMisto,
        title: 'Misto Quente',
        description: 'R$12.00 - Und',
    };

    return (
        <>
            <Container>
                <TituloContainer>
                    <h1>PRODUTOS</h1>
                    <p>Aqui está um dos nossos produtos disponíveis em nossa conveniência.</p>
                </TituloContainer>
                <ContainerCard>
                    <CardComponent title={cafe.title} description={cafe.description} img={cafe.img} onClick={handleCardClick} />
                    <CardComponent title={pao.title} description={pao.description} img={pao.img} onClick={handleCardClick} />
                    <CardComponent title={paoQueijo.title} description={paoQueijo.description} img={paoQueijo.img} onClick={handleCardClick} />
                    <CardComponent title={misto.title} description={misto.description} img={misto.img} onClick={handleCardClick} />
                </ContainerCard>
            </Container>
        </>

    );
};