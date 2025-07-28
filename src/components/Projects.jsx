import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
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
    longDescription:
      "Dans ce projet, j’ai développé le front-end complet d’une application web de location immobilière en utilisant React. L’objectif était de proposer une interface moderne, fluide et intuitive, capable d’afficher dynamiquement les logements à partir de données JSON. J’ai mis en place une navigation multi-pages grâce à React Router, en respectant la structure SPA (Single Page Application). Le projet intègre des composants modulaires, une architecture claire, et des bonnes pratiques en matière de gestion des états et de rendu conditionnel.",
    tags: ["React", "ReactRouter"],
    gradient: "linear-gradient(135deg, #2626a0ff 0%, #8b97afff 100%)",
    link: "https://github.com/Nityy20/kasa.git",
    icon: faCity,
  },
  {
    title: "SOPHIE BLUEL",
    description:
      "Développement d’une page web interactive en JavaScript pour une designeuse, avec authentification, modale d’upload et appels à une API.",
    longDescription:
      "Dans ce projet, j’ai développé en JavaScript vanilla la partie front-end d’un site vitrine pour une architecte d’intérieur. À partir d’un fichier HTML statique, j’ai intégré la logique dynamique permettant d’afficher les projets depuis une API, d’interagir avec les éléments du DOM, et de gérer les événements utilisateurs. J’ai également créé une page d’administration avec authentification, une modale pour l’upload de médias, et l’affichage dynamique des galeries. Ce projet m’a permis d’approfondir mes compétences en JavaScript natif, sans framework, et de comprendre concrètement la communication client-serveur.",
    tags: ["JavaScript", "API"],
    gradient: "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
    link: "https://github.com/Nityy20/sophie-bluel.git",
    icon: faPencil,
  },
  {
    title: "MON VIEUX GRIMOIRE",
    description:
      "Conception back-end d’une application web de notation de livres, avec API sécurisée, base de données MongoDB et gestion des images.",
    longDescription:
      "Ce projet m’a permis de concevoir le back-end complet d’un site de notation de livres. J’ai utilisé Node.js avec le framework Express pour créer une API REST sécurisée et performante. La base de données MongoDB a été modélisée avec Mongoose afin de gérer les utilisateurs, les livres, les notations et les images. Le projet inclut un système d’authentification (signup/login avec JWT), la sécurisation des données, le traitement des fichiers uploadés avec Multer, et le calcul dynamique des notes moyennes. J’ai structuré le code selon une architecture MVC pour garantir lisibilité et évolutivité.",
    tags: ["NodeJS", "MongoDB"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    link: "https://github.com/Nityy20/mon-vieux-grimoire-v2.git",
    icon: faBookBookmark,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2>Mes Projets</h2>
      <p>Découvrez quelques-unes de mes réalisations</p>
      <div className="projects__list">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      <ProjectModal
        show={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
