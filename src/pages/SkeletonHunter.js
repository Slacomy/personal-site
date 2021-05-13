import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Skeleton Hunter',
    subtitle: '',
    link: '/SkeletonHunter',
    image: '/images/projects/Skeleton/Menu.png',
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
          <p>
            <b>Concept:</b><br />
            A fantasy style game where you are a fire-weilding mage
            who must save a village from attacking skeletons.
            Included is also a 3D animated trailer.<br />
            <b>Hardware/Software:</b><br />
            A Unity-built 3D game involving health mechanics, enemy AI,
            instantiated objects, interactive NPCs, and location
            based level progression. The trailer was created in Cinema 4D.
          </p>
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
      <img src="/images/projects/Skeleton/lvl1.png" alt="test" width="48%" /> &nbsp;  &nbsp;
      <img src="/images/projects/Skeleton/lvl2.png" alt="test" width="48%" />
    </article>
  </Main>
);

export default Project2;
