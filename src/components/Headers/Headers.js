import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { HeadersContainer } from "./StylesHeader"


export const Headers = () => {
    const context = useContext(GlobalContext)
    const { setBusca } = context


    return (
        <HeadersContainer>
            <h1>Site de vendas de cápsulas espaciais!</h1>
            <input type="text" placeholder="Busca" onChange={(e) => setBusca(e.target.value)} />
        </HeadersContainer>
    )
}