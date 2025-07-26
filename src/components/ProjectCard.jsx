import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({
  title,
  description,
  tags,
  gradient,
  link,
}) {
  return (
    <div className="card">
      <div className="card__cover" style={{ background: gradient }}>
        <FontAwesomeIcon icon={faGlobe} className="card__icon" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        <div className="card__tags">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
        <a
          className="card__btn"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
}
