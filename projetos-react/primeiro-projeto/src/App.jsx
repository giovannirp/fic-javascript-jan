import Header  from "./Components/Header";
import Banner from "./Components/Banner";
import "./App.css";

function App() {

  return (
    <>
      <div className="container">
        <Header title="Logo New" />
        <Banner>
          <h1>Bem vindo ao Meu Site</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>
        <h1>Seja bem vindo!</h1>


      </div>
    </>
  )
}

export default App
