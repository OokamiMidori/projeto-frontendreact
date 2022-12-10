import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { FiltroStyled } from './StyledFiltro'

export const Filtros = () => {
    const context = useContext(GlobalContext)
    const { setPreco, setOrdenar } = context
    const [maximo, setMaximo] = useState(Infinity)
    const [minimo, setMinimo] = useState(-Infinity)
    const [alfa, setAlfa] = useState(false)

    const acionarFiltros = () => {
        setPreco({ min: minimo, max: maximo })
        setOrdenar(alfa)
    }

    const removerFiltros = () => {
        setPreco({ min: -Infinity, max: Infinity })
        setOrdenar(false)
        setMaximo("")
        setMinimo("")
        setAlfa(false)

    }

    return (
        <FiltroStyled>
            <div>
                <input type="checkbox" checked={alfa} onChange={(e) => setAlfa(e.target.checked)} />
                <span>Ordem Alfabética</span>
            </div>
            <input type="number" value={maximo} onChange={(e) => setMaximo(Number(e.target.value))} placeholder="Valor Máximo" />
            <input type="number" value={minimo} onChange={(e) => setMinimo(Number(e.target.value))} placeholder="Valor Minimo" />
            <button onClick={() => acionarFiltros()} >Filtrar</button>
            <button onClick={() => removerFiltros()}>Tirar Filtros</button>
        </FiltroStyled>

    )
}
