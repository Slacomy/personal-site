import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Skeleton Hunter',
    subtitle: '',
    link: '/SkeletonHunter',
    image: '/images/projects/Playhouse1.png',
    date: '2010-10-20',
    desc: '',
  },
];

const Project2 = () => (
  <Main
    title="Skeleton Hunter"
    description="Learn more about Sam Lacomy's 3D Fantasy Game"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Skeleton Hunter</Link></h2>
          <p>Desc of Skeleton Hunter</p>
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
