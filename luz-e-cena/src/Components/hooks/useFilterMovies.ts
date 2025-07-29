import { useEffect, useState } from "react"
import type { Movie } from "../../types";

const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setFilterredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setFilterredMovies(movies)
  }, [movies]);

  const handleSearch = () => {
    const filtered = movies.filter((movie) => 
      movie.titulo.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilterredMovies(filtered)
  }

  return {searchTerm, setSearchTerm, filteredMovies, handleSearch}
}

export default useFilterMovies