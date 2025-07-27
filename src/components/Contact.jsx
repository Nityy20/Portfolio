import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mwpqbkwv", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (response.ok) {
      setSent(true);
      form.reset();
    } else {
      alert("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Me Contacter</h2>
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
        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Nom
            <input type="text" name="name" placeholder="Votre nom" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Votre message..."
              required
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer le message"}
          </button>
          {sent && (
            <div className="contact__thanks">
              Merci, votre message a bien été envoyé !
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
