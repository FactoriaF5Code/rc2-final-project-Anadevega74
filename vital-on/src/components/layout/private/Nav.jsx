import React from "react";
import avatar from "../../../assets/img/user.jpg";

export const Nav = () => {
  return (
    <nav className="navbar__container-lists">
      
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <i className="fa-solid fa-house"></i>
            <span className="menu-list__title">Login</span>
          </a>
        </li>

        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <i className="fa-solid fa-list"></i>
            <span className="menu-list__title">Timeline</span>
          </a>
        </li>

       
      </ul>

      <ul className="container-lists__list-end">
        <li className="list-end__item">
          <a href="#" className="list-end__link-image">
            <img src={avatar} className="list-end__img" alt="Imagen de perfil"/>
          </a>
        </li>
        <li className="list-end__item">
          <a href="#" className="list-end__link">
            <span className="list-end__name">nick</span>
          </a>
        </li>
        <li className="list-end__item">
          <a href="#" className="list-end__link">
            <i className="fa-solid fa-gear"></i>
            <span className="list-end__name">Ajustes</span>
          </a>
        </li>
        <li className="list-end__item">
          <a href="#" className="list-end__link">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="list-end__name">Salir</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
