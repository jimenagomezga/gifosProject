import React, { useState, useEffect } from "react";
import "./Styles/styles.css";

import Header from "./Components/Header/Header";
import Resultados from "./Components/Resultados/Resultados";

export default function App() {
  //valor del boton de busqueda, se actualiza en cada onChange//
  const [search, setSearch] = useState("");
  // Arreglo de Gifs, inicialmente vacio//
  const [gif, setGif] = useState([]);
  //Estado boton estilo//
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheam = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {}, []);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <div className="containerPrincipal">
        <div className="lineaSuperior"></div>
        <Header
          setDarkMode={toggleTheam}
          darkMode={darkMode}
          setSearch={setSearch}
          search={search}
          setGif={setGif}
        />
        <Resultados gif={gif} setGifs={setGif} />
      </div>
    </div>
  );
}
