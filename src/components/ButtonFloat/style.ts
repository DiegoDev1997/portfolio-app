import styled from "styled-components";


export const Box=styled.button`
position: fixed;
top:80vh;
right: 1vw;
padding: 22px 33px;
border: none;
border-radius: 33px;
color: white;
background-color: #5AB2FF;
transition: all ease .3s;
cursor: pointer;
&:hover{
    background-color:#008DDA;
    box-shadow: 0 0 12px #222;
}

@media screen and (max-width:950px){
    display: none;
}
`