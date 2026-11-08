import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import familyImage from "../../assets/images/family2.jpg";
import { getFeaturedProjects } from "../../data/projects";
import "./HomePage.css";

export default function HomePage() {
  const featured = getFeaturedProjects();

  const scrollToFeatured = () => {
    document
      .getElementById("featured-work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="home">
      <section className="home-hero" aria-label="Introduction">
        <div
          className="home-hero-media"
          style={{ backgroundImage: `url(${familyImage})` }}
          role="img"
          aria-label="Chaz McKinney with family"
        />
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="home-hero-copy">
          <p className="home-brand">Chaz McKinney</p>
          <h1 className="home-headline">
            Software engineer building scripts, tools, and apps that stick.
          </h1>
          <p className="home-support">
            Junior Software Engineer in Southern Alberta — maker of ScriptWorks,
            Deseret tools, and practical household apps.
          </p>
          <div className="home-cta">
            <button
              type="button"
              className="home-cta-primary"
              onClick={scrollToFeatured}
            >
              Featured work
            </button>
            <Link to="/work" className="home-cta-secondary">
              All work
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="home-scroll-cue"
          onClick={scrollToFeatured}
          aria-label="Scroll to featured work"
        >
          <span className="home-scroll-cue-label">More below</span>
          <span className="home-scroll-cue-arrows" aria-hidden="true">
            <AiOutlineDown />
            <AiOutlineDown />
          </span>
        </button>
      </section>

      <section
        id="featured-work"
        className="home-featured"
        aria-labelledby="featured-work-title"
      >
        <div className="home-featured-inner">
          <header className="home-featured-header">
            <h2 id="featured-work-title" className="home-featured-title">
              Featured work
            </h2>
            <p className="home-featured-lead">
              Selected case studies — what I built, why, and how it turned out.
            </p>
          </header>

          <ul className="home-featured-list">
            {featured.map((project) => (
              <li key={project.id} className="home-featured-item">
                <Link
                  to={`/work/${project.id}`}
                  className="home-featured-link"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="home-featured-image"
                    loading="lazy"
                  />
                  <div className="home-featured-copy">
                    <h3 className="home-featured-name">{project.name}</h3>
                    <p className="home-featured-outcome">{project.outcome}</p>
                    <span className="home-featured-cta">View project</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="home-featured-footer">
            <Link to="/work" className="home-featured-all">
              Browse all work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
