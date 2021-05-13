import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Project1 = () => (
  <Main
    title="Demo Reel"
    description=""
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/DemoReel">Demo Reel</Link></h2>
          <p>
            <video controls width="100%">
              <source src="/images/DemoReel.mp4" type="video/mp4" />
              <track kind="captions" />
            </video>
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Project1;
