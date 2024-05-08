import { Footer, Main } from "./App"
import Header from "./components/Header"

function App() {


  return (
    <>
   <Header />
    <Main>
      <div className="content">
        <section id="sobre">
          1
        </section>
        <section id="formacao">
          2
        </section>
        <section id="habilidade">
          3
        </section>
        <section id='tecnologia'>
          4
        </section>
        <section id="projetos">
          5
        </section>
      </div>
    </Main>
    <Footer>
      footer
    </Footer>
    </>
  )
}

export default App
