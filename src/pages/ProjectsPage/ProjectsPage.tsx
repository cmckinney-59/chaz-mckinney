import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  CATEGORY_LABEL,
  PROJECTS,
  type ProjectCategory,
  type ProjectStatus,
} from "../../data/projects";
import "./ProjectsPage.css";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  personal: "Personal",
};

type FilterKey = "all" | ProjectCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "featured", label: CATEGORY_LABEL.featured },
  { key: "tools", label: CATEGORY_LABEL.tools },
  { key: "family", label: CATEGORY_LABEL.family },
  { key: "experiments", label: CATEGORY_LABEL.experiments },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const projects = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div className="projects-page">
      <header className="projects-header">
        <PageTitle title="Work" />
        <p className="projects-lead">
          Case studies of apps and tools I&apos;ve shipped — transliterators,
          household utilities, and family software.
        </p>
      </header>

      <div className="projects-filters" role="group" aria-label="Filter work">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`projects-filter${filter === key ? " is-active" : ""}`}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="projects-list">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`project-item${
              project.id === "transliteration-projects"
                ? " project-item--portrait"
                : ""
            }`}
            style={{ animationDelay: `${0.08 * index}s` }}
          >
            <Link
              to={`/work/${project.id}`}
              className="project-preview-link"
              aria-label={`View ${project.name} case study`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="project-preview-image"
                loading="lazy"
              />
            </Link>

            <div className="project-body">
              <div className="project-meta">
                <span
                  className={`project-status project-status--${project.status}`}
                >
                  {STATUS_LABEL[project.status]} ·{" "}
                  {CATEGORY_LABEL[project.category]}
                </span>
                <h2 className="project-name">
                  <Link to={`/work/${project.id}`}>{project.name}</Link>
                </h2>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-stack" aria-label="Tech stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-actions">
                <Link to={`/work/${project.id}`} className="project-action">
                  View case study
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
