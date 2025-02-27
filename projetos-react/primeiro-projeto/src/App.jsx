import Header  from "./Components/Header";
import Banner from "./Components/Banner";
import ImgCard from "./Components/ImgCard";
import Card from "./Components/Card";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";

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

        <div>
          <ImgCard caption="Uma imagem legal" newImg={img1} />
        </div>

        <Card />
      </div>
    </>
  )
}

export default App
