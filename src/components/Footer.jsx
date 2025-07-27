import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>Vincent Salingue : Mon Portfolio</div>
      <div>Créateur d’expériences numériques exceptionnelles</div>
      <div className="footer__socials">
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div>© 2025 Mon Portfolio. Tous droits réservés.</div>
    </footer>
  );
}
