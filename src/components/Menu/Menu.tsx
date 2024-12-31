import { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src='../../icone.png' alt="Logo Portal ECO" />
          </NavLink>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/noticias"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }>
                Notícias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dicas"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }>
                Dicas Sustentáveis
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/doe"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }>
                Doe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/palestras"
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }>
                Palestras
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="line"></div>
    </>
  );
}

export default Menu;
