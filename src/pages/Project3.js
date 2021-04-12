import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Breakfast Breakout',
    subtitle: '',
    link: '/project3',
    image: '/images/projects/harvest.jpg',
    date: '2010-11-20',
    desc: '',
  },
];

const Project3 = () => (
  <Main
    title="Breakfast Breakout"
    description="Learn more about the 2D Platformer."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/project3">CrossOver Bar</Link></h2>
          <p>
            A simple 2D Platformer game, where you play as a peice of toast
            who is determined to not be anyone&apos;s breakfast!
            <br />
            This was made in Unity, with art assets from my peer Hayley Rakowski<br />
          </p>
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
