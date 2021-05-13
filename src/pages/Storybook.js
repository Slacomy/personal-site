import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'FEED',
    subtitle: '',
    link: '/FEED',
    image: '/images/projects/Storybook/Main.png',
    date: '2010-10-20',
    desc: '',
  },
];

const Project2 = () => (
  <Main
    title="FEED"
    description="Learn more about Sam Lacomy's Pilot 3D Game"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/Storybook">Animated Storybook</Link></h2>
          <p>
            <b>Concept:</b><br />
            This is a simple animation meant to show off my illustration skills.
            <br />
            <b>Hardware/Software:</b><br />
            Each part was created in Clip Studio Paint, then imported to
            After Effects to be animated.
          </p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      <span style={{ marginLeft: '10px', textAlign: 'center' }}>
        <img src="/images/projects/Feed/blank.png" alt="test" width="9%" />
        <video controls width="80%">
          <source src="/images/projects/Storybook/Storybook.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
        <br />

        <img src="/images/projects/Storybook/page1.png" alt="test" width="28%" /> &nbsp;
        <img src="/images/projects/Storybook/page2.png" alt="test" width="28%" /> &nbsp;
        <img src="/images/projects/Storybook/Rose.png" alt="test" width="39%" />

      </span>

    </article>
  </Main>
);

export default Project2;
