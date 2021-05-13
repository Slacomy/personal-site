import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'FEED',
    subtitle: '',
    link: '/FEED',
    image: '/images/projects/Feed/Main.png',
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
          <h2 data-testid="heading"><Link to="/FEED">FEED Nonprofit</Link></h2>
          <p>
            <b>Concept:</b><br />
            A nonprofit dedicated to reducing food waste from resturants.
            This works by having resturants prepare their excess food
            for pickup by volenteers, who transport it to soup kitchens.
            This includes a simple animation and ads for instagram.
            <br />
            <b>Hardware/Software:</b><br />
            The assets were all created in Illustrator, and then
            animated in After Effects. The mockup was done through Photoshop.
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
        <img src="/images/projects/Feed/blank.png" alt="test" width="22%" />
        <video controls width="50%">
          <source src="/images/projects/Feed/AniLogo5.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>
        <br />

        <img src="/images/projects/Feed/InstaAds-01.png" alt="test" width="32%" /> &nbsp;
        <img src="/images/projects/Feed/InstaAds-02.png" alt="test" width="32%" /> &nbsp;
        <img src="/images/projects/Feed/InstaAds-03.png" alt="test" width="32%" />

      </span>

    </article>
  </Main>
);

export default Project2;
