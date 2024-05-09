import styled from "styled-components";
import { GlobalsStyle } from "../../App";

type Props={
    onBody:boolean
}

export const Box=styled.div<Props>`
display: flex;
flex-direction: column;

.header-box{
    display: flex;
    border-radius: 12px;
    border-bottom-left-radius: ${props=>props.onBody ? '0' : '12px'};
    border-bottom-right-radius: ${props=>props.onBody ? '0' : '12px'};
    align-items: center;
    justify-content: space-between;
    background:linear-gradient( to right,${GlobalsStyle.bgPrimary},#222);
    padding:12px;
    color: white;
    .right{
       button{
            background-color: white;
            height: 55px;
            padding: 12px;
            width: 55px;
            border-radius: 100%;
            font-size: 19px;
            color: #000;
            cursor: pointer;
            border: none;
            font-size: 18px;
            font-weight:bold;
            &:hover{
                color: white;
                background-color: ${GlobalsStyle.bgSecondary};
            }
        }
    }
}

.body-box{
display: ${props=>props.onBody ? 'flex' : 'none'};
background-color: white;
flex-direction: column;
padding: 32px 22px;
border-radius: 12px;
border: 0.5px solid #aaa;
border-top-left-radius: 0;
border-top-right-radius: 0;
border-top:none;
    .left{
        padding:12px;
        img{
            height: 300px;
            width: 100%;
        }
    }
    .right{
        font-size: 13px;
        flex:1;
        p{
            margin: 12px 0;
            color: grey;
        }
        .title{
            color: #000;
            font-size: 16px;
            font-weight: bold;
        }
        ul{
            color: grey;
            list-style: none;
            margin: 22px 0;
            li{
                padding: 4px 0;
                border-bottom: 0.1px solid #aaa;
            }
        }
        .actions{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 22px 0;

            a{
                padding: 12px 33px;
                text-align: center;
                text-decoration: none;
                color: white;
                border-radius: 12px;
                background-color:#03AED2;
                transition: all ease .3s;
                &:hover{
                    background-color:#0E46A3;
                }
            }
        }
    }
}
`