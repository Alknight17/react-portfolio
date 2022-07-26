import "./index.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFileClipboard,
  faEnvelope,
  faLineChart,
  faGears,
  faVideo,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faFileClipboard} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          exact="true"
          activeclassname="active"
          className="resume-link"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/0B5pDHUz7sSytTERRSURpUDJwUU93UHF4ckpaakthTXZNclcw/view?usp=sharing&resourcekey=0--L4tkQ008EGQExECjjOr9g"
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </a>
        <a
          exact="true"
          activeclassname="active"
          className="github-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Alknight17"
        >
          <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          exact="true"
          activeclassname="active"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alex-knight-3a6061138/"
        >
          <FontAwesomeIcon icon={faLineChart} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          exact="true"
          activeclassname="active"
          className="contact-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCWD1ZKBg8mFsPEIYgGPJLIA"
        >
          <FontAwesomeIcon icon={faVideo} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Navbar;
