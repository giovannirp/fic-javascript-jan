import { FaSearch } from "react-icons/fa";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import Button from "../Button";
import MovieList from "../MovieList";
import useFetchMovies from "../hooks/useFetchMovies";


const MovieSection = () => {
  const { movies, error, isLoading } = useFetchMovies();


  return (
    <section className={styles.container}>
      <Fieldset>
        <InputText placeholder="Buscar filmes..." />
        <Button variant='icon'>
          <FaSearch />
        </Button>
      </Fieldset>
      <h1 className={styles.titulo}>Em cartaz</h1>
      <MovieList movies={movies} />
    </section>
  )
}

export default MovieSection