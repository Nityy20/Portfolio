import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectModal({ show, project, onClose }) {
  if (!show || !project) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} tabIndex={-1}>
      <div className="modal-card" role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Fermer" onClick={onClose}>
          <FontAwesomeIcon icon="times" />
        </button>
        <div
          className="modal-card__cover"
          style={{ background: project.gradient }}
        >
          <FontAwesomeIcon icon={project.icon} className="modal-card__icon" />
        </div>
        <div className="modal-card__body">
          <h3 className="modal-card__title">{project.title}</h3>
          <div className="modal-card__desc">
            {Array.isArray(project.longDescription) ? (
              project.longDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{project.longDescription}</p>
            )}
          </div>
          <div className="modal-card__tags">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`card__tag card__tag--${tag.toLowerCase()}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            className="modal-card__btn"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur Github
          </a>
        </div>
      </div>
    </div>
  );
}
