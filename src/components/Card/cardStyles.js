import styled from "styled-components";
import colors from "../ui/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    min-height: 100vh;
    padding: 2rem;
`;


export const ContainerCard = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const TituloContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;


    h1 {
        font-size: 3rem;
        color: ${colors.darkgray};
    }

    p {
        font-size: 1rem;
        color: ${colors.lightgray};
    }

    @media (max-width: 640px) {
        text-align: center;
    }
`;

export const Card = styled.div`
  background-color: ${colors.dark};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 330px;
  width: 220px;
`;

export const BackgroundCard = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(.95);
    filter: brightness(1.2) saturate(.0);
  }
`;


export const DescriptionCard = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  color: ${colors.white};

  > p{
    font-weight: 800;
  }
`;