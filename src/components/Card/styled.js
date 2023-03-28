import styled from "styled-components";

export const Container = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
`;

export const Imagem = styled.img`
  width: 100%;
  border-radius: 5px;
  height: 200px;
`;

export const Nome = styled.h2`
  font-size: 1.4rem;
  text-align: center;
`;

export const Preco = styled.h3`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  text-align: center;
  padding: 0.6rem 0;
`;

export const Corpo = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: column;
`;

export const Buton = styled.button`
  background-color: transparent;
  padding: 0.3rem 1rem;
  cursor: pointer;
  color: inherit;
  font-size: 1.1rem;
  border: 1px solid white;
  border-radius: 3px;
  background-color: #245133;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  p {
    transition: all 400ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
