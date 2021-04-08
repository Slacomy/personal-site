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

const Project3 = () => (
  <Main
    title="Projects"
    description="Learn about Michael D'Angelo's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Project 3</Link></h2>
          <p>Oh Boy</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Project3;
