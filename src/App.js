import "./App.css";
import { useState } from "react";
import movies from "./movie-data.json";

function App() {
  const [newMovie, setNewMovie] = useState("");

  function randomMovie() {
    let movieNumber = movies.length;
    let randomNumber = Math.floor(Math.random() * movieNumber);

    setNewMovie(movies[randomNumber].title);
  }

  return (
    <div className="App">
      Netflix Movie Selector
      <button onClick={randomMovie}>Generate Movie</button>
      <p>Movie: {newMovie}</p>
    </div>
  );
}

export default App;
