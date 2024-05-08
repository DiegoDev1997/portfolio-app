import styled from "styled-components";


export const GlobalsStyle={
    bgPrimary:'#1E0342',
    bgSecondary:'orange',
}



export const Main=styled.div`
padding: 100px;


.content{
    min-height: 100vh;
    section{
        height: 800px;
    }
 
    #sobre{

    }
    #formacao{

    }
    #tecnologia{
        background-color: ${GlobalsStyle.bgPrimary};
    }
    #habilidade{
        background-color: ${GlobalsStyle.bgSecondary};
    }
    #projetos{
        background-color: ${GlobalsStyle.bgSecondary};
    }


}


@media screen {
padding: 0 20px;
}
`


export const Footer=styled.footer`
min-height: 300px;
display: flex;
justify-content: space-around;
background-color: #151515;



`