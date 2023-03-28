import { Container } from "./styled";
import Produtos from "../../components/Produtos";

const Home = (props) => {
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
  return (
    <Container>
      <Produtos
        produtos={produtos}
        setProdutos={setProdutos}
        pagina={pagina}
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        mostrarCarrinho={mostrarCarrinho}
        setMostrarCarrinho={setMostrarCarrinho}
        valorMinimo={valorMinimo}
        valorMaximo={valorMaximo}
        setValorMaximo={setValorMaximo}
        setValorMinimo={setValorMinimo}
        buscaNome={buscaNome}
        setBuscaNome={setBuscaNome}
        ordem={ordem}
        setOrdem={setOrdem}
        valor={valor}
        setValor={setValor}
      />
    </Container>
  );
};

export default Home;
