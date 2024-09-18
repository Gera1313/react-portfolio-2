import React from "react";
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow, FaSpotify } from 'react-icons/fa'; // finish the inside of brackets

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="social-links">
        {/* GitHub */}
          <a
            href="https://github.com/Gera1313"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" /> {/* GitHub Icon */}
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gerardoperez13/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> {/* LinkedIn Icon */}
          </a>
          {/* <h2>Stack Overflow</h2> */}
          <a
            href="https://stackoverflow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow className="icon" /> {/* Stack Overflow Icon */}
          </a>
          {/* <h2>Spotify</h2> */}
          <a
            href="https://open.spotify.com/user/1213083432"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify className="icon" /> {/* Spotify Icon */}
          </a>
        </div>

        {/* Copyright Information */}
        <p>© {new Date().getFullYear()} Gerardo Perez. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;