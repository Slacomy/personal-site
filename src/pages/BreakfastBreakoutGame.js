import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Breakfast Breakout',
    subtitle: '',
    link: '/BreakfastBreakoutGame',
    image: '/images/projects/Breakfast/menu.JPG',
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
          <h2 data-testid="heading"><Link to="/BreakfastBreakout">Breakfast Breakout</Link></h2>
          <p>
            <b>Concept:</b><br />
            A 2D platformer game where you play as a peice of toast who refuses
            to become breakfast! &nbsp; Break out of the house, get through the
            yard, and escape through the park to get freedom!
            <br />
            <b>Hardware/Software:</b><br />
            A Unity-built 2D platformer created to show movement systems, health functions,
            simple enemy AI, collection mechanics, and animations.
            <br />
            <i>Art assets created by peer Hayley Rakowski.</i>
          </p>
        </div>
      </header>
      <a href="/BreakfastBreakout">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </a>
      <span style={{ marginLeft: '10px', textAlign: 'center' }}>
        <img src="/images/projects/Breakfast/Bread.png" alt="test" width="13%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/utensils.png" alt="test" width="10%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/dirt.png" alt="test" width="7%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/table.png" alt="test" width="15%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/shelf.png" alt="test" width="15%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/counter.png" alt="test" width="15%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/window.png" alt="test" width="13%" />
        <img src="/images/projects/Breakfast/wall.png" alt="test" width="100%" />
        <br />
        <img src="/images/projects/Breakfast/Flower.png" alt="test" width="10%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/KeysnLocks.png" alt="test" width="8%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/ohworm.png" alt="test" width="2%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/ratrat.png" alt="test" width="20%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/bush.png" alt="test" width="10%" />&nbsp; &nbsp;
        <img src="/images/projects/Breakfast/wagon.png" alt="test" width="20%" />
        <img src="/images/projects/Breakfast/bg.png" alt="test" width="100%" />

      </span>
    </article>
  </Main>
);

export default Project3;
