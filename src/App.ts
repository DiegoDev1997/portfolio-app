import styled from "styled-components";


export const GlobalsStyle={
    bgPrimary:'#1E0342',
    bgSecondary:'#5AB2FF',
}



export const Main=styled.div`

.content{
    padding: 100px 60px;
    min-height: 100vh;
    section{
        .title-section{
            font-size: 33px;
            text-align: center;
             padding: 30px 0;
        }
    }
 
    #sobre{
        display: flex;
        flex-direction: column;
            
            .content{
                display:flex;
                align-items: center;
                .left-top{
                    width: 50%;
                    display: block;
                    .title-section{
                        color: #151515;
                        text-align: start;
                        margin: 20px 0;
                        font-size: 35px;
                    }
                    p{
                        color: #31363F;
                        font-size: 29px;
                        font-family: 'Poppins';
                    }
                    .redes{
                        display: flex;
                        margin: 70px 0;
                        a{
                            margin: 0 12px;
                            padding: 12px;
                            transition: all ease .3s;
                            img{
                                height: 85px;
                                width: 85px;
                            }
                            &:hover{
                                border-radius: 5px;
                            outline:1px solid  ${GlobalsStyle.bgPrimary};
                        }
                        }
                       
                    }
                }
                .right-bottom{
                    flex:1;
                    margin: 0 40px;
                    img{
                        border-radius: 100%;
                        width: 80%;
                    }
                }
            }
    }
    #formacao{
        .title-section{
          color:white;
        }
        background-color: ${GlobalsStyle.bgPrimary};
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 160px 0;
        .cx{
            height: 600px;
            width:50%;
            ul{
                margin: 0;
                padding: 0;
                list-style: none;
            }
           li{
               border-bottom: 1px solid ${GlobalsStyle.bgSecondary};
                margin: 0;
                display: flex;
                align-items: center;
                color:${GlobalsStyle.bgSecondary};
                margin: 22px;
                padding: 12px 0;
                font-size: 22px;

                .svg{
                    height: 55px;
                    stroke: white;
                    margin: 0 12px;
                }
                &:hover{
                  .svg{
                    stroke: white;
                    fill:${GlobalsStyle.bgSecondary}
                  }
                }
            }
        }
    }
    #tecnologia{
        background:linear-gradient( to right,${GlobalsStyle.bgPrimary},#000);
        padding: 100px 0;
        .title-section{
            color: white;
        }
        .container{
            display: flex;

            .left{
                padding: 100px 50px;
                width:60%;
                ul{
                    display: grid;
                    grid-template-columns: repeat(3,1fr);
                  list-style: none;
                  gap: 22px;
                    li{
                        font-size: 19px;
                        display: flex;
                        align-items: center;
                        margin: 12px 0;
                        padding: 12px;
                        color: ${GlobalsStyle.bgSecondary};
                        transition: all ease .3s;
                        img{
                            margin-right: 7px;
                            height: 65px;
                            width: 65px;
                        }
                        &:hover{
                            border: 1px solid ${GlobalsStyle.bgSecondary};
                            border-radius: 26px 22px;
                        }
                    }
               }
            }
            .right{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    height: 550px;
                    width: 550px;
                }
            }
        }
    }
   
    #habilidade{
        background-color: ${GlobalsStyle.bgSecondary};
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 160px 0;
        .cx{
            height: 600px;
            width:50%;
            ul{
                margin: 0;
                padding: 0;
                list-style: none;
            }
           li{
               border-bottom: 1px solid ${GlobalsStyle.bgPrimary};
                margin: 0;
                display: flex;
                align-items: center;
                color:${GlobalsStyle.bgPrimary};
                margin: 22px;
                padding: 12px 0;
                font-size: 19px;

                .svg{
                    height: 55px;
                    stroke: ${GlobalsStyle.bgPrimary};
                }
                &:hover{
                  .svg{
                    stroke: ${GlobalsStyle.bgSecondary};
                    fill:${GlobalsStyle.bgPrimary}
                  }
                }
            }
        }
    }
    #projetos{
        height: auto;
        padding: 150px 0;
       // background-color: ${GlobalsStyle.bgSecondary};
       .title-section{
        columns: #000;
       }
        .container{
            margin: 100px 0;
            padding:  0 12px;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 12px;
        }
    }


}


@media screen and (max-width:950px){
    .content{
        padding:0px;
        #projetos{
            .container{
                display: flex;
                flex-direction: column;
            }
        }
        #tecnologia{
            .container{
                flex-direction: column;
                .left{
                    padding: 100px 15px;
                    width:100%;
                   ul{
                    grid-template-columns: repeat(2,1fr);
                    gap: 6px;
                    display: flex;
                    flex-wrap: wrap;
                    li{
                        font-size: 15px;
                        margin: 0;
                        img{
                            height: 25px;
                        }
                    }
                   }
                }
                .right{
                   img{
                    width:80%;
                    height: 350px;
                   }
                }
            }
        }
        #habilidade,#formacao{
           .cx{
             width: 100%;
            li{
                font-size: 18px;
            }
           }
        }
        #sobre{
            .content{
                padding: 50px 20px;
                padding-top: 70px;
                padding-bottom: 0;
                flex-direction: column;
                .left-top{
                    width:100%;
                    .redes{
                        display: grid;
                        grid-template-columns: repeat(2,1fr);
                        a{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin: 0;
                            img{
                                height: 55px;
                            }
                        }
                    }
                    p{
                        font-size: 19px;
                    }

                }
                .right-bottom{
                    display: flex;
                    margin: 50px 0;
                    justify-content: center;
                    img{
                      
                        width: 87%;
                        height: 300px;
                    }
                }
            }
        }
    }
}
`


export const Footer=styled.footer`
min-height: 300px;
display: flex;
justify-content: space-around;
background-color: #151515;



`