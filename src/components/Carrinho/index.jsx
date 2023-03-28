import { useEffect } from "react";

import CarrinhoItem from "../CarrinhoItem";

import { Content, Message, Title, Top, Valor } from "./styled.js";

const Carrinho = (props) => {
  const { carrinho, setCarrinho, valor, setValor, mostrarCarrinho, setMostrarCarrinho } = props;

  const itensCarrinho =
    carrinho.map((obj) => (
      <CarrinhoItem
        key={obj.id}
        carrinho={obj}
        setCarrinho={setCarrinho}
        setValor={setValor}
      />
    )) || [];

  useEffect(() => {
    let itemValor = 0;
    const arr = [];

    for (let item of itensCarrinho) {
      itemValor += Number(item.props.carrinho.preco * item.props.carrinho.quantidade);
      arr.push(item.props.carrinho);

    }

    localStorage.setItem("Carrinho", JSON.stringify(arr));

    setValor(itemValor);
  }, [itensCarrinho]);

  return (
    <Content mostrarCarrinho={mostrarCarrinho}>
      <Top>
        <Title>Seus Produtos</Title>
      </Top>
      <Valor valor={valor}>
        <p>Valor Total:</p>
        <p>
          <b>R$ {valor.toFixed(2).replace(".", ",")} </b>
        </p>
      </Valor>
      {itensCarrinho.length === 0 ? (
        <Message>Não há produtos no carrinho!</Message>
      ) : (
        itensCarrinho
      )}
    </Content>
  );
};

export default Carrinho;
