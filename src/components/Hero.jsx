import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="presentation">
      <div className="container hero__wrapper">
        <div className="hero__content">
          <h1>Bonjour,</h1>
          <h2>Je suis Vincent Salingue</h2>
          <p>
            Développeur passionné avec une expertise en création d’expériences
            numériques innovantes. Je transforme les idées en solutions
            créatives et fonctionnelles.
          </p>
          <div className="hero__tags">
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Design UI/UX</span>
          </div>
          <a href="#projects" className="hero__btn">
            Voir mes projets
          </a>
        </div>
        <div className="hero__image">
          <img
            src="/src/assets/profile.jpg"
            alt="Votre portrait"
            className="hero__photo"
          />
        </div>
      </div>
    </section>
  );
}
