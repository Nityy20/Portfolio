import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">Mon Portfolio</div>
        <nav className="header__nav">
          <a href="#presentation">Présentation</a>
          <a href="#projects">Mes Projets</a>
          <a href="#contact">Me contacter</a>
        </nav>
      </div>
    </header>
  );
}
