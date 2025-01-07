import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
        <a href="https://www.facebook.com/protyasha.alixy.5/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          <span>Facebook</span>
        </a>
        <a href="https://github.com/hassankhsalar" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/salar-hassan-028167217/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          <span>LinkedIn</span>
        </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Visa-Navigator
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
