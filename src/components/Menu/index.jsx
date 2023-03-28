import React from "react";
import { Button, Container, Item, List, Logo, LogoButton } from "./styled";

import logo from "../../assets/logo.png";

const Menu = (props) => {
  const { setPagina } = props;

  return (
    <Container>
      <Logo>
        <LogoButton onClick={() => setPagina("")}>
          <img src={logo} alt="Logo" />
        </LogoButton>
      </Logo>
      <List>
        <Item>
          <Button onClick={() => setPagina("naves")}>Naves</Button>
        </Item>
        <Item>
          <Button onClick={() => setPagina("grife")}>Grife</Button>
        </Item>
        <Item>
          <Button onClick={() => setPagina("viagens")}>
            Viagens Espaciais
          </Button>
        </Item>
      </List>
    </Container>
  );
};

export default Menu;
