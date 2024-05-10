import { Main } from "./App"
import Checked from "./assets/svgs/checked"
import CardProject from "./components/CardProject"
import Header from "./components/Header"
import { Formacao, Habilidades, Projetos, Tecnologias } from "./utils/data"
import Footer from "./components/Footer"
import ButtonFloat from "./components/ButtonFloat"


function App() {


  return (
    <>
   <Header />
    <Main>
      <div className="content">
        <section id="sobre">
          <div className="content">
            <div className="left-top">
                <h3 className="title-section">Quem Sou Eu? </h3>
                <p>Olá 😄👋👋</p>
                <p>Sou Desenvolvedor Full-Stack e tenho 26 anos,atuo na aréa á três anos!Tenho 
                  atuado em projetos utilizando tecnologias como React,Express,Next JS,WordPress e outras.
                 Se caso eu poder agregar com minha experiência em seus projetos,entre em contato!
                </p>
                <div className="redes">
                  <a href="https://www.linkedin.com/in/diegodmorais/" target="_blank"><img src="/linkedin.svg" alt="" /></a>
                  <a href="https://github.com/DiegoDev1997" target="_blank"><img src="/git.svg" alt="" /></a>
                  <a href="" target="_blank"><img src="/what.svg" alt="" /></a>
                  <a href="mailto:diegodutramorais@gmail.com" target="_blank"><img src="/gmail.svg" alt="" /></a>
                </div>
            </div>
            <div className="right-bottom">
                <img src="/profile.jpeg" alt="foto de profissional" />
            </div>
          </div>
        </section>
        <section id="formacao">
          <h3 className="title-section">Formação</h3>
          <div className="cx">
            <ul>
             {Formacao.map((h,k)=><li key={k}> <Checked />{h.name}</li>)}
            </ul>
          </div>
        </section>
        <section id="habilidade">
          <h3 className="title-section">Habilidades</h3>
          <div className="cx">
            <ul>
             {Habilidades.map((h,k)=><li key={k}> <Checked />{h}</li>)}
            </ul>
          </div>
        </section>
        <section id='tecnologia'>
          <h3 className="title-section">Tecnologias</h3>
          <div className="container">
            <div className="left">
              <ul>
                {Tecnologias.map((i,k)=><li key={k}><img src={i.icon} />{i.name}</li>) }
              </ul>
            </div>
            <div className="right">
              <img src="/dev.png" alt="" />
            </div>
          </div>
        </section>
        <section id="projetos">
          <h3 className="title-section">Projetos Pessoais</h3>
          <div className="container">
              {Projetos.map((p,k)=><CardProject project={p} key={k} />)}
          </div>
        </section>
      </div>
      <ButtonFloat/>
    </Main>
    <Footer />
    </>
  )
}

export default App
