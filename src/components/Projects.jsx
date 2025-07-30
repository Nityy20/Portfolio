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
    longDescription: [
      "Dans ce projet, j’ai développé le front-end complet d’une application web de location immobilière en utilisant React. L’objectif était de proposer une interface moderne, fluide et intuitive, capable d’afficher dynamiquement les logements à partir de données JSON.",
      "L’un des principaux défis a été la mise en place d’une navigation multi-pages tout en respectant la structure SPA (Single Page Application). Pour y répondre, j’ai utilisé React Router afin de gérer efficacement les différentes routes de l’application, y compris la gestion des routes inexistantes (404).",
      "Cela m’a conduit à organiser le projet autour d’un composant Router dédié et à structurer proprement les éléments partagés comme le header, le footer ou le layout principal. Le projet intègre également des composants modulaires, une architecture claire, et des bonnes pratiques en matière de gestion des états et de rendu conditionnel, ce qui m’a permis de consolider mes compétences en React et en structuration front-end.",
    ],
    tags: ["React", "ReactRouter"],
    gradient: "linear-gradient(135deg, #2626a0ff 0%, #8b97afff 100%)",
    link: "https://github.com/Nityy20/kasa.git",
    icon: faCity,
  },
  {
    title: "SOPHIE BLUEL",
    description:
      "Développement d’une page web interactive en JavaScript pour une designeuse, avec authentification, modale d’upload et appels à une API.",
    longDescription: [
      "Dans ce projet, j’ai développé en JavaScript vanilla la partie front-end d’un site vitrine pour une architecte d’intérieur. À partir d’un fichier HTML statique, j’ai intégré la logique dynamique permettant d’afficher les projets depuis une API, d’interagir avec les éléments du DOM, et de gérer les événements utilisateurs.",
      "L’un des principaux défis a été la manipulation du DOM sans l’aide de framework, notamment pour construire dynamiquement la galerie d’images et mettre en place une modale fonctionnelle pour l’ajout de médias. J’ai également dû gérer proprement les appels API, l’authentification et le retour d’erreurs côté client.",
      "Pour surmonter cela, j’ai structuré le code en fonctions réutilisables et utilisé une gestion rigoureuse des événements et des statuts HTTP avec fetch() et try/catch. J’ai également développé une interface d’administration complète, incluant un système de connexion et un formulaire d’upload avec aperçu des fichiers.",
      "Ce projet m’a permis d’approfondir mes compétences en JavaScript natif, sans framework, et de comprendre concrètement la communication client-serveur dans un contexte réel.",
    ],
    tags: ["JavaScript", "API"],
    gradient: "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
    link: "https://github.com/Nityy20/sophie-bluel.git",
    icon: faPencil,
  },
  {
    title: "MON VIEUX GRIMOIRE",
    description:
      "Conception back-end d’une application web de notation de livres, avec API sécurisée, base de données MongoDB et gestion des images.",
    longDescription: [
      "Ce projet m’a permis de concevoir le back-end complet d’un site de notation de livres. J’ai utilisé Node.js avec le framework Express pour créer une API REST sécurisée et performante. La base de données MongoDB a été modélisée avec Mongoose afin de gérer les utilisateurs, les livres, les notations et les images.",
      "L’un des enjeux techniques majeurs a été de garantir la sécurité des routes sensibles, notamment celles liées à la modification ou la suppression de livres. Pour y répondre, j’ai mis en place un système d’authentification basé sur JWT, accompagné d’un middleware de vérification des tokens pour contrôler l’accès aux différentes fonctionnalités.",
      "Une autre difficulté a été la gestion de l’upload d’images via Multer et l’optimisation des fichiers côté serveur, que j’ai résolue en automatisant leur traitement dès réception. Le projet inclut également le calcul dynamique des notes moyennes en fonction des évaluations des utilisateurs.",
      "Il m’a permis de renforcer mes compétences en développement d’API, en sécurisation des données, et en manipulation de fichiers sur un serveur Node.js.",
    ],
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
