import familyImage from "../../assets/images/family.jpg";
import "./AboutPage.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function AboutPage() {
  return (
    <article className="about-page">
      <PageTitle title="About" />

      <section className="about-intro">
        <div className="about-intro-content">
          <div>
            <p className="about-intro-text">
              I&apos;m Chaz McKinney — a husband, father, and Junior Software
              Engineer in Southern Alberta. I grew up in Utah, served a mission
              in the Philippines, studied at Ensign College and BYU–Hawaii, and
              build software at Experlogix while shipping personal tools around
              writing systems and everyday apps.
            </p>
            <p className="about-intro-text">
              Five years in QA taught me how products break; engineering is how
              I put them together. Outside work I make ScriptWorks, Deseret
              Alphabet tools, and practical household software.
            </p>
          </div>
          <img
            src={familyImage}
            alt="Chaz with family"
            className="about-intro-image"
          />
        </div>
      </section>

      <section className="about-story">
        <h2 className="about-section-title">Focus</h2>
        <ul className="about-skills">
          <li>React &amp; TypeScript</li>
          <li>Vite / client-side apps</li>
          <li>QA → engineering workflows</li>
          <li>Script transliteration &amp; fonts</li>
          <li>Local-first tools</li>
        </ul>
      </section>

      <section className="about-story">
        <h2 className="about-section-title">Experience</h2>
        <div className="about-block">
          <h3 className="about-subtitle">Experlogix</h3>
          <p>
            Junior Software Engineer (2025–present). Previously Quality
            Assurance Engineer (2020–2025).
          </p>
        </div>
        <div className="about-block">
          <h3 className="about-subtitle">Education</h3>
          <p>Ensign College · BYU–Hawaii</p>
        </div>
        <div className="about-block">
          <h3 className="about-subtitle">Selected work</h3>
          <p>
            See case studies on the{" "}
            <a className="link" href="#/work">
              Work
            </a>{" "}
            page — including how Baybayin and{" "}
            <em>Ang Aklat Ni Mormon</em> led to ScriptWorks.
          </p>
        </div>
      </section>
    </article>
  );
}
