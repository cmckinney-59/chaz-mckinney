import { Link, useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  CATEGORY_LABEL,
  getProjectById,
  type ProjectStatus,
} from "../../data/projects";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./ProjectDetailPage.css";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  personal: "Personal",
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <article className="project-detail">
        <PageTitle title="Project not found" />
        <p className="project-detail-lead">
          That case study isn&apos;t here. Browse the full list instead.
        </p>
        <Link to="/work" className="project-detail-back">
          <AiOutlineArrowLeft aria-hidden />
          Back to work
        </Link>
      </article>
    );
  }

  return (
    <article className="project-detail">
      <Link to="/work" className="project-detail-back">
        <AiOutlineArrowLeft aria-hidden />
        Back to work
      </Link>

      <header className="project-detail-header">
        <p className="project-detail-eyebrow">
          {CATEGORY_LABEL[project.category]} · {STATUS_LABEL[project.status]}
        </p>
        <PageTitle title={project.name} />
        <p className="project-detail-tagline">{project.tagline}</p>
      </header>

      <figure className="project-detail-figure">
        <img
          src={project.image}
          alt={project.imageAlt}
          className={`project-detail-image${
            project.id === "transliteration-projects"
              ? " project-detail-image--portrait"
              : ""
          }`}
        />
      </figure>

      <div className="project-detail-actions">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action"
          >
            <FaExternalLinkAlt aria-hidden />
            Open app
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action project-action--ghost"
          >
            <FaGithub aria-hidden />
            Code
          </a>
        )}
      </div>

      <section className="project-detail-grid">
        <div className="project-detail-block">
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div className="project-detail-block">
          <h2>Role</h2>
          <p>{project.role}</p>
        </div>
        <div className="project-detail-block">
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </div>
        <div className="project-detail-block">
          <h2>Stack</h2>
          <ul className="project-detail-stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
