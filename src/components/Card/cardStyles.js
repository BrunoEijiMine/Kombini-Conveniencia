import styled from "styled-components";

export const ContainerCard = styled.div`
    display: grid;
    border: 1px solid red;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    justify-content: center;
    width: 100%;
`

export const Card = styled.div`
    padding: 2rem;
    border: 1px solid blue;
    border-radius: 10px;
    background-color: #222429;
    text-align: center;
`