import React, { useState, useEffect } from "react";

import {
  Remove,
  Options,
  MinusOrPlus,
  Quantity,
  Left,
  Image,
  Right,
  Container,
  Top,
  Price,
  Name,
} from "./styled";

const CarrinhoItem = (props) => {
  const { nome, preco, id, imagem, quantidade } = props.carrinho;
  const { setCarrinho, setValor } = props;

  const [quantidadeItem, setquantidadeItem] = useState(quantidade);

  const removeItem = () => {
    setCarrinho((current) =>
      current.filter((item) => {
        if (item.id !== id) return item;
        else {
          item.quantity = 1;
          localStorage.removeItem("Carrinho");
        }
      })
    );
  };

  const handleCartButtons = (value) => {
    const item = props.carrinho;

    if (value === "minus") {
      item.quantidade -= 1;
    } else {
      item.quantidade += 1;
    }

    setquantidadeItem(item.quantidade);
  };

  useEffect(() => {
    setValor(preco * quantidade);

    if (quantidadeItem === 0) removeItem();
  }, [quantidadeItem]);

  return (
    <Container id={id}>
      <Left>
        <Image src={imagem} alt={nome} />
      </Left>

      <Right>
        <Top>
          <Name>{nome}</Name>
          <Price>R$ {preco.toString().replace(".", ",")}</Price>
        </Top>

        <Options>
          <MinusOrPlus onClick={() => handleCartButtons("minus")}>
            -
          </MinusOrPlus>
          <Quantity
            type={"number"}
            readOnly
            value={quantidadeItem}
            onChange={(e) => setquantidadeItem(e.target.value)}
          />
          <MinusOrPlus onClick={() => handleCartButtons("plus")}>+</MinusOrPlus>
        </Options>

        <Remove onClick={removeItem}>Remover</Remove>
      </Right>
    </Container>
  );
};

export default CarrinhoItem;
