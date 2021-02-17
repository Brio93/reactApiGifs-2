import React from "react";
import { Route, Link } from "wouter";

import ListOfGifs from "./components/ListOfGifs";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <section className="seccionGift">
        <h2>Hola a todos</h2>
        <Link to="/gifs/morty">Gifs de Morty</Link>
        <Link to="/gifs/bart">Gifs de Bart</Link>
        <Link to="/gifs/goku">Gifs de Gokú</Link>

        <Route component={ListOfGifs} path="/gifs/:keywords" />
      </section>
    </div>
  );
};

export default App;
