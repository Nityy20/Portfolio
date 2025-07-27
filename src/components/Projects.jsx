import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Application Web",
    description:
      "Une application moderne avec interface utilisateur intuitive et fonctionnalités avancées.",
    tags: ["React", "Node.js"],
    gradient: "linear-gradient(135deg, #2626a0ff 0%, #8b97afff 100%)",
    link: "#",
  },
  {
    title: "Site E-commerce",
    description:
      "Plateforme de vente en ligne avec système de paiement et gestion des commandes.",
    tags: ["JavaScript", "CSS"],
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    link: "#",
  },
  {
    title: "Application Mobile",
    description:
      "Application mobile cross-platform avec design responsive et performances optimisées.",
    tags: ["React Native", "API"],
    gradient: "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
    link: "#",
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
