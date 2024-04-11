import React from "react";
import { motion } from "framer-motion";

export const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <h2>{movie.title}</h2>
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
        alt="cover"
      />
    </motion.div>
  );
};
