import { useContext } from "react"
import { CardCarrinho } from "../CardCarrinho/CardCarrinho"

import { GlobalContext } from "../../contexts/GlobalContext"
import { CarrinhoCointainer } from "./StyledCarrinho"


export const Carrinho = () => {
   
    const context = useContext(GlobalContext)
    const { removerDoCarrinho, valorTotal, carrinho, limparCarrinho} = context



    return (
        <CarrinhoCointainer>
           
            <p>Carrinho</p>
             <p>Valor total: US${valorTotal},00</p>
            <button onClick={()=>limparCarrinho()}>Limpar Lista</button>
            <section>{carrinho? carrinho.map((nave) => (<CardCarrinho
                key={nave.id}
                nome={nave.modelo}
                imagem={nave.imagem}
                valor={nave.valor}
                removerDoCarrinho={removerDoCarrinho}
                quantidade={nave.quantidade}
                nave={nave}
            />)): null
            }</section>
           
        </CarrinhoCointainer>
    )
}