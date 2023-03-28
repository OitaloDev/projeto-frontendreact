import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  padding: 1rem 1rem;
  border-radius: 5px;

`;

export const Left = styled.figure``;

export const Image = styled.img`
  max-height: 50vh;
  border-radius: 5px;
  min-width: 300px;
  max-width: 300px;

`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;

`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.p`
  font-size: 1.3rem;
`;

export const Price = styled.p`
  border-top: 1px solid white;
  padding-top: 0.5rem;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 80%;
`;

export const MinusOrPlus = styled.button`
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: transparent;
  font-size: 2rem;
  align-self: flex-start;
`;

export const Quantity = styled.input`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  font-size: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  cursor: default;
`;

export const Remove = styled.button`
  padding: 0.3rem 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 5px;
  width: 80%;
  font-size: 1.1rem;
  background-color: darkslategray;
  transition: all 400ms ease-in-out;

  &:hover {
    border-color: aquamarine;
    background-color: transparent;
  }
`;
