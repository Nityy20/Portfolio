import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Me contacter</h2>
      <p className="contact__subtitle">Discutons de votre prochain projet</p>
      <div className="contact__card">
        <div className="contact__infos">
          <div className="contact__info">
            <span className="contact__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <div>
              <div className="contact__label">Email</div>
              <div className="contact__item-value">vincent-2905@hotmail.fr</div>
            </div>
          </div>
          <div className="contact__info">
            <span className="contact__icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <div>
              <div className="contact__label">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/vincent-salingue/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__item-value contact__link"
              >
                Vincent Salingue
              </a>
            </div>
          </div>
          <div className="contact__info">
            <span className="contact__icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            <div>
              <div className="contact__label">GitHub</div>
              <a
                href="https://github.com/Nityy20"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__item-value contact__link"
              >
                Nityy 20
              </a>
            </div>
          </div>
          <div className="contact__info">
            <span className="contact__icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <div>
              <div className="contact__label">Localisation</div>
              <div className="contact__item-value">Paris, France</div>
            </div>
          </div>
        </div>
        <form className="contact__form">
          <label>
            Nom
            <input type="text" placeholder="Votre nom" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Votre email" required />
          </label>
          <label>
            Message
            <textarea rows={4} placeholder="Votre message..." required />
          </label>
          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}
