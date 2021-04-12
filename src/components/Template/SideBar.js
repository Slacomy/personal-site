import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <a href="https://samlacomydev.netlify.app/" className="logo">
        <img src={`${PUBLIC_URL}/images/LogoGraphic.png`} alt="" />
      </a>
      <header>
        <h2>Sam Lacomy</h2>
        <p><a href="mailto:slacomy@gmail.com">slacomy@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sam. I like building things.<br />
        I am a <a href="https://wilkes.edu/">Wilkes University</a> graduate who&apos;s primary interest is
        graphic design, web design, web development, video game design, and video game development!
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">Resume</Link>
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright"><Link to="/contact">&copy; Sam Lacomy </Link></p>
    </section>
  </section>
);

export default SideBar;
