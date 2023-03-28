import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 2rem;
  width: 75vw;
  margin: 0 auto;
`;

export const Titulo = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Carrinho = styled.button`
  background-color: transparent;
  position: absolute;
  top: 1vh;
  right: 2vw;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  cursor: pointer;
  color: inherit;
  opacity: 1;
  transition: all 400ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;
