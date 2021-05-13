import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'CrossOver Bar',
    subtitle: '',
    link: '/CrossOverBar',
    image: '/images/projects/Crossover/CO1.jpg',
    date: '2010-11-20',
    desc: '',
  },
];

const Project1 = () => (
  <Main
    title="CrossOverBar"
    description="Learn more about the Animanga Bar."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/CrossOverBar">CrossOver Bar</Link></h2>
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
      <span style={{ marginLeft: '10px', textAlign: 'center' }}>
        &nbsp;&nbsp;<img src="/images/projects/Crossover/Logo.png" alt="test" width="90%" />
        <br />&nbsp;&nbsp;
        <img src="/images/projects/Crossover/BarGlass1.png" alt="test" width="15%" />&nbsp; &nbsp;
        <img src="/images/projects/Crossover/BarGlass2.png" alt="test" width="18%" />&nbsp; &nbsp;
        <img src="/images/projects/Crossover/Shirt.png" alt="test" width="18%" />&nbsp; &nbsp;
        <img src="/images/projects/Crossover/Bag.png" alt="test" width="18%" />&nbsp; &nbsp;
        <img src="/images/projects/Crossover/Charm.png" alt="test" width="18%" />
        <br />
        <img src="/images/projects/Crossover/BarMenu.png" alt="test" width="100%" />
        &nbsp;<img src="/images/projects/Crossover/ColorMENU2.png" alt="test" width="32%" />&nbsp; &nbsp;
        <img src="/images/projects/Crossover/ColorMENU3.png" alt="test" width="32%" />&nbsp;&nbsp;
        <img src="/images/projects/Crossover/ColorMENU4.png" alt="test" width="32%" />
      </span>
    </article>
  </Main>
);

export default Project1;
