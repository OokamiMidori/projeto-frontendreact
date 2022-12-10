import { useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import { HomePage } from "./pages/HomePage";
import GlobalStyled from "./GlobalStyled";



function App() {
  const modelos = [
    {
      modelo: "Vostok",
      imagem:
        "https://t.ctcdn.com.br/9sbOZD4hsyF0SP62BUV9TB4ybgo=/1024x0/smart/i385202.jpeg",
      id: " 01",
      origem: "URSS",
      valor: 28000000,
      ano: 1961,
       
    },
    {
      modelo: "Mercury",
      imagem:
        "https://t.ctcdn.com.br/SN9TL3kq0A3u8-9YdMxL1B11Mxw=/1024x0/smart/i385203.jpeg",
      id: "02",
      origem: "EUA",
      valor: 186000000,
      ano: 1961,
       
    },
    {
      modelo: "Voskhod",
      imagem:
        "https://t.ctcdn.com.br/BDKLbE3mo_4zaePyMhhat04UMaA=/1024x0/smart/i385206.jpeg",
      id: "03",
      origem: "URSS",
      valor: 215000000,
      ano: 1964,
       
    },
    {
      modelo: "Gemini",
      imagem:
        "https://t.ctcdn.com.br/aXDT-DEjPDy0Gw5qdrQC5Tj-ez4=/1024x0/smart/i385207.jpeg",
      id: "04",
      origem: "EUA",
      valor: 797400000,
      ano: 1965,
       
    },
    {
      modelo: "Soyuz",
      imagem:
        "https://t.ctcdn.com.br/PjrB5d0uR-NqKJYcaspbAhFaC9E=/1024x0/smart/i385208.jpeg",
      id: "05",
      origem: "URSS/Russia",
      valor: 831000000,
      ano: 1967,
       
    },
    {
      modelo: "Apollo",
      imagem:
        "https://t.ctcdn.com.br/fbPKsc3d-urIDrRoR4urS9FoZc4=/1024x0/smart/i380493.png",
      id: "06",
      origem: "EUA",
      valor: 25400000000,
      ano: 1968,
       
    },
    {
      modelo: "Shenzhou",
      imagem:
        "https://t.ctcdn.com.br/KzLsDbyLnkE2eMa2y6KEL9I2nRQ=/1024x0/smart/i385210.jpeg",
      id: "08",
      origem: "China",
      valor: 31400000000,
      ano: 2003,
       
    },
    {
      modelo: "Crew Dragon",
      imagem:
        "https://t.ctcdn.com.br/dWrYkQteqtSWPngGT9X7Fa0AKZA=/1024x0/smart/i365233.jpeg",
      id: " 09",
      origem: "EUA",
      valor: 42000000000,
      ano: 2020,
       
    },
  ];

  const carrinhoAtualizado = JSON.parse(window.localStorage.getItem("carrinho"))

  const [busca, setBusca] = useState("")
  const [preco, setPreco]= useState({min:-Infinity, max:Infinity})
  const [ordenar, setOrdenar] = useState(false)
  const [valorTotal, setValorTotal] = useState(0)
  const [carrinho, setCarrinho] = useState(carrinhoAtualizado);

  const removerDoCarrinho = (naveParaRemover) => {
    const index = carrinho.indexOf(naveParaRemover);
    if (index > -1) {
      const valorNave = naveParaRemover.quantidade * naveParaRemover.valor
      setValorTotal(valorTotal - valorNave)
      const novoCarrinho = [...carrinho]
      novoCarrinho.splice(index, 1);
      setCarrinho(novoCarrinho)
      
    }
  };

const limparCarrinho = () =>{
  setCarrinho([])
  setValorTotal(0)
}

  useEffect(() => {
    window.localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }, [carrinho])

  const context = {
    modelos: modelos,
    removerDoCarrinho: removerDoCarrinho,
    carrinho: carrinho,
    setCarrinho: setCarrinho,
    valorTotal: valorTotal,
    setValorTotal: setValorTotal,
    limparCarrinho:limparCarrinho,
    preco:preco,
    setPreco:setPreco,
    ordenar:ordenar,
    setOrdenar:setOrdenar,
    busca:busca,
    setBusca:setBusca,
  };

  return (
    <>
      <GlobalContext.Provider value={context}>
        <GlobalStyled/>
        <HomePage />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
