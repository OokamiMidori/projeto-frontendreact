import styled from "styled-components";

export const ImagemCard = styled.img`
width: 500px;
height: 338px;
`

export const CardIndividual = styled.div`
display: flex;
margin: 5px;
flex-direction: column;
background-color: #CBEDD5;
align-items: center;
`
export const BotaoContainer = styled.section`
display: flex;
padding: 5px;
justify-content: center;
justify-content: space-between;

`
export const BotaoCard = styled.button`
max-width: 80px;
max-height: 50px;
min-width: 19px;
margin: 2px;
background-color: #439A97;
border-style: none;
border-radius: 4px;
padding: 4px;
:hover{
    background-color: #97DECE ;
}
`