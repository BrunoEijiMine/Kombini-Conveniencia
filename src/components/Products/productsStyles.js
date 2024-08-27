import styled from "styled-components";
import colors from "../ui/colors";

export const Container = styled.article`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  h1 {
    font-size: 3rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #777;
  }
`;