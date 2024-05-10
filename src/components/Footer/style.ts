import { styled } from "styled-components";
import { GlobalsStyle } from "../../App";


export const Box=styled.footer`
min-height: 300px;
display: flex;
justify-content: space-around;
background-color:#000;
align-items: center;
padding: 100px 0;
.content{
    h4{
      text-align: center;
        font-size: 23px;
        color: ${GlobalsStyle.bgSecondary};
    }
  .links{
    display: flex;
     margin: 70px 0;

      a{
         margin: 0 12px;
        padding: 12px;
        transition: all ease .3s;
        border-radius: 5px;
         outline:1px solid  white;
          img{
            height: 55px;
            width: 55px;
            }
             &:hover{
              border-radius: 5px;
              box-shadow: 0 0 12px #aaa;
              background-color:white;
              outline:1px solid  ${GlobalsStyle.bgSecondary};
             }
        }
  }
}

@media screen and (max-width:950px){
  .content{
   .links{
    a{
      margin: 0 12px;
      img{
        height: 40px;
        width:40px;
      }
    }
   }
  }
}
`