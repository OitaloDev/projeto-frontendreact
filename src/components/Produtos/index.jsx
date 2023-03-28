import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Cards, Container, Titulo, Carrinho } from "./styled";
import naves from "../../assets/data/naves.json";
import viagemEspacial from "../../assets/data/viagemEspacial.json";

import { BsCartCheck } from "react-icons/bs";

const Produtos = (props) => {
  const {
    produtos,
    setValor,
    valor,
    setOrdem,
    ordem,
    setBuscaNome,
    buscaNome,
    setValorMinimo,
    setValorMaximo,
    valorMaximo,
    valorMinimo,
    setMostrarCarrinho,
    mostrarCarrinho,
    setCarrinho,
    carrinho,
    pagina,
    setProdutos,
  } = props;

  const [titulo, setTitulo] = useState("");

  const adicionarItem = (item) => {
    const encontrarItem = carrinho.filter((e) => e.id === item.id);
    if (encontrarItem.length) {
      alert("Item já adicionado")
    } else {
      setCarrinho((array) => [...array, item]);
    }
  };

  useEffect(() => {
    if (pagina === "naves") {
      setTitulo("Naves Espaciais")
      setProdutos(naves);
    } else if (pagina === "viagens") {
      setTitulo("Viagens Espaciais")
      setProdutos(viagemEspacial);
    } /*  else if (pagina === "grife") {
      setProdutos(grife);
    }  */ else {
      setProdutos([]);
      setTitulo("")
    }
  }, [pagina]);

  return (
    <Container>
      <Carrinho onClick={() => setMostrarCarrinho(!mostrarCarrinho)}>
        <BsCartCheck size={30} />
      </Carrinho>

      <Titulo>{titulo}</Titulo>
      <Cards>
        {produtos
          .filter((e) => e.preco > Number(valorMinimo))
          .filter((e) => e.preco < Number(valorMaximo))
          .filter((e) => e.nome.toLowerCase().includes(buscaNome.toLowerCase()))
          .sort((a, b) => {
            if (ordem === "decrescente") return a.preco > b.preco ? -1 : 1;
            else if (ordem === "crescente") return a.preco < b.preco ? -1 : 1;
            return produtos;
          })
          .map((item) => (
            <Card
              produtos={item}
              key={item.id}
              adicionarItem={() => adicionarItem(item)}
            />
          ))}
      </Cards>
    </Container>
  );
};

export default Produtos;
