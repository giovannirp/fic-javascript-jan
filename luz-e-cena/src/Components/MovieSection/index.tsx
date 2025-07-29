import { FaSearch } from "react-icons/fa";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import Button from "../Button";
import MovieList from "../MovieList";
import useFetchMovies from "../hooks/useFetchMovies";
import useFilterMovies from "../hooks/useFilterMovies";


const MovieSection = () => {
  const { movies, error, isLoading } = useFetchMovies();
  const {searchTerm, handleSearch, setSearchTerm, filteredMovies} = useFilterMovies(movies);

  return (
    <section className={styles.container}>
      <Fieldset>
        <InputText value={searchTerm} 
         onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
         placeholder="Buscar filmes..." />
        <Button variant='icon' onClick={handleSearch}>
          <FaSearch />
        </Button>
      </Fieldset>
      <h1 className={styles.titulo}>Em cartaz</h1>
      {isLoading && <p>Carregando filmes...</p>}
      {error && <p className={styles.error}>error</p>}
      <MovieList movies={filteredMovies} />
    </section>
  )
}

export default MovieSection