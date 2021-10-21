import "../../../Styles/NavBar.css";

export default function NavBar(props) {
  return (
    <nav className="containerNavbar">
      <div>
        {props.darkMode === true ? (
          <img
            src="./images/logo-mobile-modo-noct.svg"
            alt="logoligth"
            width="60px"
            height="60px"
          />
        ) : (
          <img
            src="./images/logo-desktop.svg"
            alt="logodark"
            width="60px"
            height="60px"
          />
        )}
      </div>
      <button className="boton" onClick={props.setDarkMode}>
        {`MODO ${props.darkMode ? "LIGTH" : "DARK"}`}
      </button>
    </nav>
  );
}
