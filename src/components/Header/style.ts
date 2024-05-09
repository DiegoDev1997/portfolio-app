import { styled } from "styled-components";
import { GlobalsStyle } from "../../App";

type props={
    statemenu:boolean
}
export const HeaderBox=styled.header<props>`
background-color:${GlobalsStyle.bgPrimary};
display: flex;
padding: 22px;
align-items: center;
justify-content:space-between;
.left{
    .logo{
        color: ${GlobalsStyle.bgSecondary};
        font-size: 27px;
    }
}
.right{
    .cx-on,.cx-close{
        display: none;
    }
    nav{
        display: flex;
       align-items: center;
        a{
            margin: 0 12px;
            color: white;
            padding: 12px;
            text-align: center;
            font-size: 15px;
            transition: all ease .3s;
            text-decoration: none;
            &:hover{
                border-radius: 8px;
                font-weight: bold;
                background-color: ${GlobalsStyle.bgSecondary};
                color: ${GlobalsStyle.bgPrimary};
                
            }
        }
    }
}

@media screen and (max-width:950px){
    .left{
        .logo{
            font-size: 17px;
        }
    }
    .right{
        .cx-on{
            display: flex;
            justify-content: center;
            align-items: center;
            button{
                border: none;
                background-color: ${GlobalsStyle.bgSecondary};
                box-shadow: 0 0 4ox #000;
                height: 55px;
                width:55px;
                border-radius: 8px;
                .svg{
                    height: 100%;
                    stroke:${GlobalsStyle.bgPrimary};
                }
            }
        }
        .cx-close{
            display: ${props=>!props.statemenu ? 'none' : 'flex'};
            justify-content: flex-end;
            align-items: center;
            padding: 12px;
            width: 100%;
            background-color: ${GlobalsStyle.bgSecondary};
            button{
                border: none;
                background-color: ${GlobalsStyle.bgPrimary};
                box-shadow: 0 0 4ox #000;
                height:55px;
                width: 55px;
                padding: 12px;
                border-radius: 8px;
                .svg{
                    height: 100%;
                    stroke:${GlobalsStyle.bgSecondary};
                }
            }
        }
        nav{
            display: ${props=>!props.statemenu ? 'hidden' : 'flex'};
            flex-direction: column;
            width:${props=>props.statemenu ? '60vw' : '0'};
            position: fixed;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: #00215E;
            transition: all ease .3s;
       
           .links{
                padding: 150px 0;
                width: 100%;
                a{
                    display: ${props=>!props.statemenu ? 'none' : 'block'};
                    width:${props=>props.statemenu ? '100%' : '0'};
                    font-size: 17px;
                    color: ${GlobalsStyle.bgSecondary};
                    margin: 12px 0;
                    border-radius: none;
                    border-bottom: 1px solid ${GlobalsStyle.bgPrimary};
                    border-radius: none;
                    &:hover{
                        color: white;
                        border-radius: none;
                    }
                }
           }
        }
    }
}
`