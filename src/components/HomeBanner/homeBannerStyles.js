import styled from "styled-components";
import background from "../../assets/img/background-inicio.jpg";
import colors from "../ui/colors"


export const Container = styled.div``;

export const Banner = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100vh;
    width: 100%;

    @media (max-width: 768px) {
        background-attachment: scroll;
    }
`;

export const Title = styled.h1`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3vw;
    text-align: center;
    z-index: 1;
    white-space: pre-line;
    text-align: center;
    width: 100%;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        font-size: 7vw;
    }

    @media only screen and (min-width: 480px) and (max-width: 800px) {
    font-size: 7vw;
    }

    @media only screen and (min-width: 640px) and (max-width: 960px) {
    font-size: 7vw;
    }

    @media only screen and (min-width: 720px) and (max-width: 1280px) {
    font-size: 5vw;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        font-size: 5vw;
    }

    > span {
        font-style: italic;
        font-weight: 100;
    }

    > .textBold{
        color: ${colors.primary};
        font-style: normal;
        font-weight: bold;
    }
`;