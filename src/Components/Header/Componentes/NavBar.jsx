import "../../../Styles/NavBar.css";
import logoMobileNoct from "../../../images/logo-mobile-modo-noct.svg";
import logoMobile from "../../../images/logo-desktop.svg";

export default function NavBar(props) {
  return (
    <nav className="containerNavbar">
      <div>
        {props.darkMode === true ? (
          <img
            src={logoMobileNoct}
            alt="logoligth"
            width="60px"
            height="60px"
          />
        ) : (
          <img src={logoMobile} alt="logodark" width="60px" height="60px" />
        )}
      </div>
      <button className="boton" onClick={props.setDarkMode}>
        {`MODO ${props.darkMode ? "LIGTH" : "DARK"}`}
      </button>
    </nav>
  );
}
