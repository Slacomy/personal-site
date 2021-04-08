import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Sam Lacomy's Projects webpage. Here only to show off individual Projects."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <p>I&apos;m a designer with a love for code, which melds together much better than
            expected.<br />
            I consider code and design to be different aspects to the same puzzle,
            one that I love solving time and time again.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read <Link to="/about">my resume</Link>,
        or you can check out my <Link to="/project1">projects</Link>, or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
