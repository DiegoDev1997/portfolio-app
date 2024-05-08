import Close from "../../assets/svgs/close"
import Menu from "../../assets/svgs/menu"
import { useAppContext } from "../../context"
import { HeaderBox } from "./style"



export default ()=>{
  const {onMenuMobile,handleMenuMobile}=useAppContext()
  const text='<\ Diego Dutra Morais />'
  


    return  <HeaderBox statemenu={onMenuMobile}>
      <div className="left">
        <div className="logo">
        <p>{text}</p>
        </div>
      </div>
      <div className="right">
        <div className="cx-on">
          <button onClick={()=>handleMenuMobile(true)}>
            <Menu />
          </button>
        </div>
        <nav>
          <div className="cx-close">
            <button onClick={()=>handleMenuMobile(false)}>
              <Close />
            </button>
          </div>
          <div className="links">
            <a href="#sobre">Sobre</a>
            <a href="#formacao">Formação</a>
            <a href="#habilidade">Habilidades</a>
            <a href="#tecnologia">Tecnologias</a>
            <a href="#projetos">Projetos Pessoais</a>    
          </div>
        </nav> 
      </div>
  </HeaderBox>
}