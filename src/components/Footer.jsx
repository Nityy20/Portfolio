import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">Portfolio : Vincent Salingue</div>
      <div className="footer__subtitle">
        Créateur d’expériences numériques exceptionnelles
      </div>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/vincent-salingue/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Nityy20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="footer__copyright">
        © 2025 Mon Portfolio. Tous droits réservés.
      </div>
    </footer>
  );
}
