import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./components/Menu";
import Carrinho from "./components/Carrinho";
import Home from "./paginas/Home";
import { useState } from "react";

const AppRoutes = () => {
  const [pagina, setPagina] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("Carrinho")) || []
  );
  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState(1000000000000000);
  const [buscaNome, setBuscaNome] = useState("");
  const [ordem, setOrdem] = useState("decrescente");
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [valor, setValor] = useState(0);
  
  return (
    <div>
      <Menu setPagina={setPagina} />
      <Carrinho
        carrinho={carrinho}
        setCarrinho={setCarrinho}
        valor={valor}
        setValor={setValor}
        mostrarCarrinho={mostrarCarrinho}
        setMostrarCarrinho={setMostrarCarrinho}
      />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                produtos={produtos}
                setProdutos={setProdutos}
                pagina={pagina}
                carrinho={carrinho}
                setCarrinho = {setCarrinho}
                mostrarCarrinho={mostrarCarrinho}
                setMostrarCarrinho = {setMostrarCarrinho}
                valorMinimo={valorMinimo}
                valorMaximo={valorMaximo}
                setValorMaximo = {setValorMaximo}
                setValorMinimo = {setValorMinimo}
                buscaNome = {buscaNome}
                setBuscaNome = {setBuscaNome}
                ordem = {ordem}
                setOrdem = {setOrdem}
                valor = {valor}
                setValor = {setValor}
              
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
