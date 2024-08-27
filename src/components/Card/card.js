import React from "react";
import { ContainerCard, Card } from "../Card/cardStyles";
import { useNavigate } from 'react-router-dom';

const CardComponent = ({ title, description, onClick }) => {
    return (
        <Card onClick={onClick}>
            <div className="container-titulo-card">
                <h2 className="titulo-card">{title}</h2>
                <p>{description}</p>
                <button className="botao-card">Acessar</button>
            </div>
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
        title: 'Café',
        description: 'R$1.50 - Dose',
    };

    return (
        <ContainerCard>
            <CardComponent title={cafe.title} description={cafe.description} onClick={handleCardClick} />
            <CardComponent title={cafe.title} description={cafe.description} onClick={handleCardClick} />
            <CardComponent title={cafe.title} description={cafe.description} onClick={handleCardClick} />
            <CardComponent title={cafe.title} description={cafe.description} onClick={handleCardClick} />
        </ContainerCard>
    );
};