import React from "react";
import Lottie from "react-lottie";
import animationData2 from "../../../images/lotties/404-Error.json";

export default function MensajeError() {
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <h1 className="textoError">
      <Lottie options={defaultOptions2} height={300} width={600} />
      Oops! No se encontraron resultados para tu busqueda
    </h1>
  );
}
