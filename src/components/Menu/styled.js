import styled from "styled-components";

export const Container = styled.nav``;

export const Logo = styled.figure`
  position: fixed;
  margin: 0.5rem 0 0 1rem;
  width: 10%;

  img {
    width: 100%;
  }
`;

export const LogoButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`

export const List = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  top: 28vh;
  left: 1vw;
`;

export const Item = styled.li`
  border: 1px solid white;
  border-radius: 3px;
  background-color: #245133;
  transition: all 400ms ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  padding: 0.3rem 1rem;
  cursor: pointer;
  color: inherit;
  font-size: 1.1rem;
  opacity: 1;
  transition: all 400ms ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;
