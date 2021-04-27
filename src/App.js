import './App.css';
import React, {useState} from "react";
import {movies} from "./movies";
import Button from "./Button";

function App() {
    const [currentMovie, setCurrentMovie] = useState(null);

  return (
   <div>
       <h1>Movie Carousel</h1>
       {
           movies.map((movie) => {
               // this is where the logic happens
               return (
                   <button key={movie.title} onClick={() => setCurrentMovie(movie)}>
                       <p>{movie.title}</p>
                       <img src={movie.posterUrl} height={250}/>
                   </button>
               )
           })
       }

       {
           currentMovie ?
               <>
                <p>{currentMovie.title}</p>
                <p>{currentMovie.description}</p>
                <p>{currentMovie.rating}</p>
                <p>{currentMovie.director}</p>
                <p>{currentMovie.releaseYear}</p>
                <p>{currentMovie.categories.join(", ")}</p>
               </>
               :
               <p>Please select a movie for details</p>
       }
   </div>
  );
}

export default App;
