import { FaSearch } from "react-icons/fa";
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import styles from "./MovieSection.module.css";
import Button from "../Button";
import MovieList from "../MovieList";
import type { Movie } from "../../types";

const movies: Movie[] = [
    {
        id: 1,
        src: "/capas_de_filmes/amanhecer.png",
        alt: "Imagem do filme Amanhecer",
        titulo: "Amanhecer",
        categoria: "2D",
        censura: "Livre",
        genero: "Romance",
        duracao: 90,
    },
    {
        id: 2,
        src: "/capas_de_filmes/amigo_da_sombra.png",
        alt: "Imagem do filme Amigo da sombra",
        titulo: "Amigo da sombra",
        categoria: "2D",
        censura: "12 anos",
        genero: "Suspense",
        duracao: 110,
    },
    {
        id: 3,
        src: "/capas_de_filmes/amigos_do_bosque_magico.png",
        alt: "Imagem do filme Amigo do bosque mágico",
        titulo: "Amigo do bosque mágico",
        categoria: "2D",
        censura: "Livre",
        genero: "Animação",
        duracao: 60,
    },
    {
        id: 4,
        src: "/capas_de_filmes/caminho_para_o_abismo.png",
        alt: "Imagem do filme Caminho para o abismo",
        titulo: "Caminho para o abismo",
        categoria: "2D",
        censura: "14 anos",
        genero: "Horror",
        duracao: 103,
    },
    {
        id: 5,
        src: "/capas_de_filmes/desastres_do_escritorio.png",
        alt: "Imagem do filme Desastres do Escritório",
        titulo: "Desastres do Escritório",
        categoria: "2D",
        censura: "Livre",
        genero: "Comédia",
        duracao: 85,
    },
    {
        id: 6,
        src: "/capas_de_filmes/mestres_do_futuro.png",
        alt: "Imagem do filme Mestres do Futuro",
        titulo: "Mestres do Futuro",
        categoria: "2D",
        censura: "Livre",
        genero: "Documentário",
        duracao: 120,
    },
    {
        id: 7,
        src: "/capas_de_filmes/la_Esperanza.png",
        alt: "Imagem do filme La Esperanza",
        titulo: "La Esperanza",
        categoria: "2D",
        censura: "12 anos",
        genero: "Drama",
        duracao: 98,
    },
    {
        id: 8,
        src: "/capas_de_filmes/o_nexus_do_tempo.png",
        alt: "Imagem do filme O nexus do tempo",
        titulo: "O nexus do tempo",
        categoria: "3D",
        censura: "10 anos",
        genero: "Ficcção Científica",
        duracao: 105,
    },
];

const MovieSection = () => {
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