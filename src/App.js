import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "./components/Movie";
import { Filter } from "./components/Filter";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=fadfffad437da14cdc720ccb46e5ea4a&language=en-US&page=1"
      )
      .then((res) => {
        setMovies(res.data.results);
        setFiltered(res.data.results);
      });
  }, []);

  // console.log(movies);

  return (
    <div className="App">
      <Filter
        popular={movies}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
