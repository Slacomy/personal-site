import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Playhouse Pilot',
    subtitle: '',
    link: '/project',
    image: '/images/projects/Playhouse1.png',
    date: '2010-10-20',
    desc: '',
  },
];

const Project2 = () => (
  <Main
    title="Projects"
    description="Learn about Michael D'Angelo's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Project 2</Link></h2>
          <p>Playhouse Pilot</p>
        </div>
      </header>
      <a href="/PlayHousePilot">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </a>
      <img src="/images/projects/Playhouse2.png" alt="test" width="416px" /> &nbsp;  &nbsp;
      <img src="/images/projects/Playhouse3.png" alt="test" width="416px" paddingLeft="10px" />
    </article>
  </Main>
);

export default Project2;
