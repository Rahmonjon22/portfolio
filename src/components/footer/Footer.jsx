import React from 'react';
import './footer.scss';
import { Facebook, LinkedIn, Instagram, GitHub } from "@material-ui/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Rahmonjon Ibragimov</h3>
        <p className="paragraph-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae adipisci maiores impedit ratione explicabo, alias placeat, odio voluptates,
          molestiae fugit consequatur. Nisi pariatur impedit natus ab illo aperiam minus esse!
        </p>
        <ul className="socials">
          <li><a href="https://www.linkedin.com/in/rahmonjon-john-ibragimov-b03635203/" target="_blank" rel="noreferrer"> <LinkedIn className="icon" /></a></li>
          <li><a href="https://github.com/Rahmonjon22" target="_blank" rel="noreferrer"> <GitHub className="icon" /></a></li>
          <li><a href="https://www.instagram.com/ibragimovjohn/" target="_blank" rel="noreferrer"><Instagram className="icon" /></a></li>
          <li><a href="https://www.facebook.com/rahmonjon/" target="_blank" rel="noreferrer"><Facebook className="icon" /></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>copyright &copy;2021 September. designed by <span>Rahmonjon Ibragimov</span></p>
      </div>

    </footer>
  )
}
