import React, { useContext } from "react";
import { GifosContext } from "../../Context/GifosContext";
import "../../Styles/Resultados.css";
import Gifs from "../Resultados/Componentes/Gifs";
import Loader from "../../Components/Resultados/Componentes/Loader";
import MensajeError from "../Resultados/Componentes/MensajeError";
import MensajeInicial from "../../Components/Resultados/Componentes/MensajeInicial";

export default function Resultados({ gif }) {
  const { loading, error } = useContext(GifosContext);
  return (
    <div className="contenedorResultados">
      {loading ? (
        <Loader />
      ) : gif.length ? (
        gif.map((item) => {
          const image = item.images.fixed_height.url;
          return (
            <Gifs
              key={item.id}
              title={item.title}
              imageUrl={image}
              url={item.url}
              image={item.images.fixed_height.url}
            />
          );
        })
      ) : error ? (
        <MensajeError />
      ) : (
        <MensajeInicial />
      )}
    </div>
  );
}
