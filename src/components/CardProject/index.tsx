import { useState } from "react"
import { Box } from "./style"

type Props={
   project:{
    id:number,
    img:string,
    name:string,
    tecs:string[],
    about:string,
    url:string
   }

}



export default ({project}:Props)=>{
    const [startBody,setStartBody]=useState(false)

    
    return <Box onBody={startBody} >
        <div className="header-box" >
            <div className="left">
              <h3>{project.name}</h3>
            </div>
            <div className="right">
                <button onClick={()=>startBody ? setStartBody(false) : setStartBody(true)}>{startBody ? '-' : '+'}</button>
            </div>
        </div>
        <div className="body-box">
            <div className="left">
                <img src={project.img} alt="" />
            </div>
            <div className="right">
                <h3>Sobre</h3>
                 <p>{project.about}</p>
                <p className="title">Tecnologias:</p>
                <ul>{project.tecs.map((i,k)=><li key={k}>{i}</li>)}</ul>
                <div className="actions">
                    <a href={project.url}>ver na web</a>
                </div>
            </div>
        </div>
    
    </Box>
}