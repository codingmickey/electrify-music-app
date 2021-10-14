import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <a
        href="https://twitter.com/codingmickey"
        target="_blank"
        rel="noreferrer"
        className="footer-twitter"
      >
        <TwitterIcon fontSize="large" />
      </a>
      <a
        href="https://github.com/codingmickey"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
      <p className="footer-text">
        Made with <span className="footer-heart">❤</span> by Kartik Jolapara
      </p>
      <p className="footer-text">&copy; {year} Electrify</p>
    </footer>
  );
}

export default Footer;
