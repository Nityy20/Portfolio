import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Me contacter</h2>
      <p>Discutons de votre prochain projet</p>
      <div className="contact__container">
        <div className="contact__info">
          <div>
            <b>Email</b>
            <br />
            vincent-2905@hotmail.fr
          </div>
          <div>
            <b>Téléphone</b>
            <br />
            +33 6 62 47 16 80
          </div>
          <div>
            <b>Localisation</b>
            <br />
            Paris, France
          </div>
        </div>
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Nom" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Votre message..." />
          <button className="btn" type="submit">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}
