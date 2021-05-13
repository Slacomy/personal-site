import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Playhouse Pilot',
    subtitle: '',
    link: '/PlayHousePilotGame',
    image: '/images/projects/Playhouse/Playhouse1.png',
    date: '2010-10-20',
    desc: '',
  },
];

const Project2 = () => (
  <Main
    title="Playhouse Pilot"
    description="Learn more about Sam Lacomy's Pilot 3D Game"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/PlayHousePilotGame">PlayHouse Pilot</Link></h2>
          <p>desc of Playhouse Pilot</p>
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
      <img src="/images/projects/Playhouse/Playhouse2.png" alt="test" width="48.5%" /> &nbsp;  &nbsp;
      <img src="/images/projects/Playhouse/Playhouse3.png" alt="test" width="48.5%" paddingLeft="10px" />
    </article>
  </Main>
);

export default Project2;
