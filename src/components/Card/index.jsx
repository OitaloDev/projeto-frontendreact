import React from "react";
import { Buton, Container, Corpo, Imagem, Nome, Preco } from "./styled";

const Card = (props) => {
  const { imagem, nome, preco } = props.produtos;

  return (
    <Container>
      <Imagem src={imagem} alt={nome} />
      <Corpo>
        <Nome>{nome}</Nome>
        <Preco>R$ {preco.toFixed(2).replace(".", ",")}</Preco>
        <Buton onClick={props.adicionarItem}>
          <p>Adicionar ao Carrinho</p>
        </Buton>
      </Corpo>
    </Container>
  );
};

export default Card;
