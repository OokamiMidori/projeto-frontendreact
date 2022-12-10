import {CardIndividualCarrinho, ImagemCardCarrinho } from "./CardCarrinhoStyles";

export const CardCarrinho = (props) => {
const {nome, imagem, valor, removerDoCarrinho, quantidade, nave} = props

    return(
        <>
        <CardIndividualCarrinho>
            <ImagemCardCarrinho src={imagem} alt={nome}/>
            <p>{nome}</p>
            <p>US${valor},00</p>
            <p>Quantidade:{quantidade}</p>
            <button onClick={()=>removerDoCarrinho(nave)} >Remover item</button>
        </CardIndividualCarrinho>
        </>
    )
};
