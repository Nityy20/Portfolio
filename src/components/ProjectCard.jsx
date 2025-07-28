import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function getTagClass(tag) {
  switch (tag.toLowerCase()) {
    case "react":
      return "card__tag card__tag--react";
    case "reactrouter":
      return "card__tag card__tag--reactrouter";
    case "javascript":
      return "card__tag card__tag--javascript";
    case "api":
      return "card__tag card__tag--api";
    case "nodejs":
      return "card__tag card__tag--nodejs";
    case "mongodb":
      return "card__tag card__tag--mongodb";
    default:
      return "card__tag";
  }
}

export default function ProjectCard({
  title,
  description,
  tags,
  gradient,
  icon,
  onClick,
}) {
  return (
    <div className="card" onClick={onClick} tabIndex={0} role="button">
      <div className="card__cover" style={{ background: gradient }}>
        <FontAwesomeIcon icon={icon} className="card__icon" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{description}</p>
        <div className="card__tags">
          {tags.map((tag, idx) => (
            <span key={idx} className={getTagClass(tag)}>
              {tag}
            </span>
          ))}
        </div>
        <button className="card__btn" tabIndex={-1}>
          Voir le projet
        </button>
      </div>
    </div>
  );
}
