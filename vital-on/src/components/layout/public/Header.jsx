// eslint-disable-next-line no-unused-vars
import React from "react";
import { Nav } from "./Nav";
import logo from "../assets/img/logo-sin-fondo.png";

export const Header = () => {
  return (
    <header className="layout__navbar">
      
      <img className="logo" src={logo} alt="logo" />
      <div className="navbar__logo"></div>
      <div className="navbar__header"></div>
      <Nav />
    </header>
  );
};
