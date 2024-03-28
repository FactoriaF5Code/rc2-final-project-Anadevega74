// eslint-disable-next-line no-unused-vars
import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="layout__navbar">
      <div className="navbar__header">
        <a href="#" className="navbar__title">
          VITAL ON
        </a>
      </div>

      <Nav />
    </header>
  );
};
