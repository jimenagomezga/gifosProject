import React, { useState, useEffect, useContext } from "react";
import { GifosContext } from "../../../Context/GifosContext";
import "../../../Styles/Busqueda.css";
import {
  URLAPI,
  KEYAPI,
  RESOURCES,
  LIMITS,
} from "../../../Utilities/Constants";
import ilustracionHeader from "../../../images/ilustra_header.svg";
import lupaIcon from "../../../images/icon-search-mod-noc.svg";

const searchUrl = `${URLAPI}${RESOURCES.search}?api_key=${KEYAPI}`;

export default function Busqueda({ setGif }) {
  //valor del boton de busqueda, se actualiza en cada onChange//
  const [search, setSearch] = useState("");
  //Autocomplete - palabra//
  const [suggestion, setsuggestion] = useState([]);
  //Loading - Error
  const { setLoading, setError } = useContext(GifosContext);
  // Menu autocomplete
  const [showmenu, setShowMenu] = useState(true);

  const handleSubmit = async () => {
    if (search !== "") {
      const generadorUrl = `${searchUrl}&limit=${LIMITS.limit_12}&rating=g&q=${search}`;
      try {
        let peticion = await fetch(generadorUrl);
        setLoading(true);
        const data = await peticion.json();
        //console.log(data);
        if (data.data.length === 0) {
          setError(true);
          setGif([]);
        } else {
          setGif(data.data);
          setError(false);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      setGif([]);
    }
  };

  const autocomplete = async () => {
    const urlKey = `${URLAPI}${RESOURCES.autocomplete}?api_key=${KEYAPI}&q=${search}&limit=${LIMITS.limit_5}`;
    try {
      let peticion = await fetch(urlKey);
      const data = await peticion.json();
      //console.log(data);
      setsuggestion(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickOption = (item) => {
    setSearch(item.name);
    setShowMenu(false);
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
    setShowMenu(true);
  };

  useEffect(() => {
    //handleSubmit();
    autocomplete();
  }, [search]);

  return (
    <header className="contenedorBusqueda">
      <h1 className="tituloPrincipal">
        ¡Inspirate y busca los mejores <strong>GIFS!</strong>
      </h1>
      <img src={ilustracionHeader} alt="ilustracionheader" width="399px" />
      <div className="barraDeBusqueda">
        <input
          type="text"
          value={search}
          onChange={handleInput}
          placeholder="Busca gifs"
        />
        <div className="listaItems">
          <ul>
            {suggestion.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    showmenu ? "listaItemsVisible" : "listaItemsInvisible"
                  }`}
                  onClick={() => handleClickOption(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={handleSubmit}>
          <img className="iconoLupa" src={lupaIcon} alt="iconoSearch" />
        </button>
      </div>
    </header>
  );
}
