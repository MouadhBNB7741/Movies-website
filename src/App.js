import React from "react";
import { useEffect, useState } from "react";
//my key 84cceb49
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Test from "./Test";

const API_URL = "http://www.omdbapi.com?apikey=84cceb49";
const App = () => {
  let searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search);
  };
  const [Movies, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>Movie land</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        ></img>
      </div>
      {Movies.length > 0 ? (
        <div className="container">
          {Movies.map((movie) => {
            return <MovieCard movie={movie}></MovieCard>;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>no movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
