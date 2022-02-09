import "../styles/Css/header.css";
import logo from "../assets/web_logo_190118_light-txt.06756983.png";
function Header() {
  return (
    <header>
      <div className="header-top-bar"></div>
      <div className="navbar">
        <div className="block-logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
