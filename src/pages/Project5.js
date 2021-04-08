import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Playhouse Pilot',
    subtitle: '',
    link: '/project',
    image: '/images/projects/nearestdollar.jpg',
    date: '2010-10-20',
    desc: '',
  },
];

const Project5 = () => (
  <Main
    title="Projects"
    description="Learn about Michael D'Angelo's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Project 5</Link></h2>
          <p>UHHHHH</p>
        </div>
      </header>
      <img src="/images/projects/nearestdollar.jpg" alt="test" width="100%" />
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Project5;
