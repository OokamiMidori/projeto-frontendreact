import {  BotaoContainer, CardIndividual, ImagemCard } from "./Styles";




export const Card = (props) => {
    const { nome, imagem, ano, valor, origem, adicionarNoCarrinho,  diminuirQuantidade, nave } = props;

    return (
        <>
            <CardIndividual>
                <h3>{nome}</h3>
                <ImagemCard src={imagem} alt={nome} />
                <p>Ano:{ano} </p>
                <p>Valor: US${valor},00</p>
                <p>Origem: {origem} </p>
                <BotaoContainer>
                    < button onClick={() => diminuirQuantidade(nave)}>-</ button>
                    < button onClick={() => adicionarNoCarrinho(nave)}>Comprar</ button>
                    < button onClick={() => adicionarNoCarrinho(nave)}>+</ button>
                </BotaoContainer>
            </CardIndividual>
        </>
    )
}