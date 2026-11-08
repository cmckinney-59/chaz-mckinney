import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <article className="contact-page">
      <PageTitle title="Contact" />
      <p className="contact-lead">
        Want to talk scripts, software, or collaboration? Reach out anytime.
      </p>

      <ul className="contact-list">
        <li>
          <a
            className="contact-link"
            href="mailto:the.baybayin.project@gmail.com"
          >
            <AiOutlineMail className="contact-icon" aria-hidden />
            <span>
              <strong>Email</strong>
              <span className="contact-detail">
                the.baybayin.project@gmail.com
              </span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href="https://www.instagram.com/scriptworks_tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="contact-icon" aria-hidden />
            <span>
              <strong>Instagram</strong>
              <span className="contact-detail">@scriptworks_tr</span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href="https://www.facebook.com/profile.php?id=61558642794586"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook className="contact-icon" aria-hidden />
            <span>
              <strong>Facebook</strong>
              <span className="contact-detail">ScriptWorks</span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/chazdmckinney"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="contact-icon" aria-hidden />
            <span>
              <strong>LinkedIn</strong>
              <span className="contact-detail">linkedin.com/in/chazdmckinney</span>
            </span>
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href="https://github.com/cmckinney-59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" aria-hidden />
            <span>
              <strong>GitHub</strong>
              <span className="contact-detail">github.com/cmckinney-59</span>
            </span>
          </a>
        </li>
      </ul>
    </article>
  );
}
