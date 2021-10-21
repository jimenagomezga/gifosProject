import "../../Styles/Header.css";
import Busqueda from "../../Components/Header/Componentes/Busqueda";
import NavBar from "../../Components/Header/Componentes/NavBar";

export default function Header({
  setDarkMode,
  darkMode,
  search,
  handleSubmit,
  setSearch,
  setGif
}) {
  return (
    <div className="headerContenedor">
      <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Busqueda
        search={search}
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        setGif={setGif}
      />
      <h1 className="tituloResultados">Resultados de la busqueda:</h1>
    </div>
  );
}
