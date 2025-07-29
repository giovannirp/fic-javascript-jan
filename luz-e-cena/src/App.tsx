import Header from "./Components/Header"
import MovieSection from "./Components/MovieSection"
import Banner from "./Components/Banner"
import Newslleter from "./Components/Newsletter"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <Header />
      <Banner src="./banner.png" alt="Banner"/>
      <MovieSection />
      <Banner src="./combo.png" alt="Combo" />
      <Newslleter />
      <Footer />
    </>
  )
}

export default App
