import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{max-width: 80px;
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
    
   }
`
    ;
   

export default GlobalStyled;