
import { useContext } from "react"
import { Card } from "../components/Card/Card"
import { Headers } from "../components/Headers/Headers"
import { GlobalContext } from "../contexts/GlobalContext"
import { Carrinho } from "../components/Carrinho/Carrinho"
import { CardContainer, ContainerItens } from "./Styles"
import { Filtros } from "../components/Filtros/Filtros"



export const HomePage = () => {

    const context = useContext(GlobalContext)
    const { modelos, removerDoCarrinho, setValorTotal, carrinho, setCarrinho, ordenar, preco, busca } = context


    const total = carrinho.reduce((acc, item) => {
        return item.valor * item.quantidade + acc
    }, 0
    )
    setValorTotal(total)

    const adicionarNoCarrinho = (naveParaAdicionar) => {
        const novoCarrinho = [...carrinho]

        const jaEstaNoCarrinho = carrinho.find((naveNoCarrinho) => naveNoCarrinho.modelo === naveParaAdicionar.modelo);
        console.log(carrinho)
        if (!jaEstaNoCarrinho) {
            const novaNaveParaAdicionar = { ...naveParaAdicionar, quantidade: 1 }
            novoCarrinho.push(novaNaveParaAdicionar)
        } else {
            jaEstaNoCarrinho.quantidade = jaEstaNoCarrinho.quantidade + 1
        }
        setCarrinho(novoCarrinho)
    }


    const diminuirQuantidade = (quantidadeParaDiminuir) => {
        const novoCarrinho = [...carrinho]
        const jaEstaNoCarrinho = novoCarrinho.find((naveNoCarrinho) => naveNoCarrinho.id === quantidadeParaDiminuir.id)
        if (jaEstaNoCarrinho.quantidade <= 1) {
            return removerDoCarrinho(jaEstaNoCarrinho)
        }
        jaEstaNoCarrinho.quantidade--
        setCarrinho(novoCarrinho)



    }





    return (
        <>
            <Headers />
            <ContainerItens>
                <Filtros />
                <CardContainer>
                    {modelos.filter((nave) => {
                        return nave.modelo.toUpperCase().includes(busca.toUpperCase())
                    }).filter((nave) => {
                        return nave.valor >= preco.min && nave.valor <= preco.max
                    }).sort((a, b) => {
                        if (ordenar) {
                            if (a.modelo < b.modelo) {
                                return -1
                            } else {
                                return 1
                            }
                        }
                    }).map((nave) => (
                        <Card key={nave.id}
                            nome={nave.modelo}
                            imagem={nave.imagem}
                            origem={nave.origem}
                            valor={nave.valor}
                            ano={nave.ano}
                            diminuirQuantidade={diminuirQuantidade}
                            adicionarNoCarrinho={adicionarNoCarrinho}
                            nave={nave}
                        />
                    ))}
                </CardContainer>
                <Carrinho />
            </ContainerItens>

        </>

    )
}