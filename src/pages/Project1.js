import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'CrossOver Bar',
    subtitle: '',
    link: '/project1',
    image: '/images/projects/CO1.jpg',
    date: '2010-11-20',
    desc: '',
  },
];

const Project1 = () => (
  <Main
    title="Projects"
    description="Learn about Michael D'Angelo's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/project1">CrossOver Bar</Link></h2>
          <p>
            CrossOver is an anime and video game themed bar,
            with events and drinks tailored for fans of such content.
            <br />
            The main aspect of this project is the website, coded in HTML and CSS.<br />
          </p>
        </div>
      </header>
      <a href="/CrossOver">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </a>
      <span style={{ marginLeft: '10px' }}>
        <img src="/images/projects/BarLogo.png" alt="test" width="90%" />
        <img src="/images/projects/BarGlass.png" alt="test" width="44.5%" />&nbsp; &nbsp;
        <img src="/images/projects/BarMenu.png" alt="test" width="50%" />
      </span>
    </article>
  </Main>
);

export default Project1;
