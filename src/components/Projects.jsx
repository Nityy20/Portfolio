import React from "react";
import ProjectCard from "./ProjectCard";
import {
  faCity,
  faPencil,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "KASA",
    description:
      "Conception front-end d’une application web de location immobilière, avec gestion du routage et affichage dynamique des données.",
    tags: ["React", "ReactRouter"],
    gradient: "linear-gradient(135deg, #2626a0ff 0%, #8b97afff 100%)",
    link: "https://github.com/Nityy20/kasa.git",
    icon: faCity,
  },
  {
    title: "SOPHIE BLUEL",
    description:
      "Développement d’une page web interactive en JavaScript pour une designeuse, avec authentification, modale d’upload et appels à une API.",
    tags: ["JavaScript", "API"],
    gradient: "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
    link: "https://github.com/Nityy20/sophie-bluel.git",
    icon: faPencil,
  },
  {
    title: "MON VIEUX GRIMOIRE",
    description:
      "Conception back-end d’une application web de notation de livres, avec API sécurisée, base de données MongoDB et gestion des images.",
    tags: ["NodeJS", "MongoDB"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    link: "https://github.com/Nityy20/mon-vieux-grimoire-v2.git",
    icon: faBookBookmark,
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Mes Projets</h2>
      <p>Découvrez quelques-unes de mes réalisations</p>
      <div className="projects__list">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
