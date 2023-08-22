import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = ({ background, title }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <header className="header">
      <div className="top-header">
        <div className="top-header-wrapper conatct">
          <ul>
            <li>
              <a href="tel:+ 420 485 107 874" className="phone">
                + 420 485 107 874
              </a>
            </li>
            <li>
              <a href="mailto:zrnovsky@email.cz" className="mail">
                zrnovsky@email.cz
              </a>
            </li>
            <li>
              <a href="mailto:luciezrnovska@email.cz" className="mail">
                luciezrnovska@email.cz
              </a>
            </li>
            <li>
              <address className="address">
                nám. Dr. E. Beneše 4/12, Liberec 460 01
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className={`bottom-header  ${background ? "blue-background" : ""}`}>
        <div className="bottom-header-wrapper max-width">
          <Link to="/" className="index-top">
            {" "}
            <img
              src={logo}
              alt="logo advokátní kancelář AKZ"
              style={{ width: "300px" }}
            />
          </Link>
          <input
            className="menu-btn index-top"
            type="checkbox"
            id="menu-btn"
          ></input>
          <label
            htmlFor="menu-btn"
            className={"menu-icon index-top"}
            onClick={handleClick}
          >
            <span className="navicon"></span>
          </label>
          <nav className={isActive ? "menu-icon menu-active" : ""}>
            <ul>
              <li>
                <Link to="/">Domů</Link>
              </li>
              <li>
                <Link to="/o-nas">O nás</Link>
              </li>
              <li>
                <Link to="/nase-sluzby">Naše služby</Link>
              </li>
              <li>
                <Link to="/novinky">Novinky</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
        {title && <h1 className="subject-title">{title}</h1>}
      </div>
    </header>
  );
};

export default Header;
