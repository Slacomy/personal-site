import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'One Truth, One Lie, One Choice',
    subtitle: '',
    link: '/OneChoice',
    image: '/images/projects/Visual/menu.jpg',
    date: '2010-10-20',
    desc: '',
  },
];

const Project2 = () => (
  <Main
    title="One Truth, One Lie, One Chance"
    description="Learn more about Sam Lacomy's Visual Novel"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/OneChoice">One Truth, One Lie, One Chance</Link></h2>
          <p>
            <b>Concept:</b><br />
            A visual novel with dating simulator undertones, One Truth, One Lie, One
            Chance was created to show off coding skills, an understanding of
            decision structures, and working with a partner.<br />
            <b>Hardware/Software:</b><br />
            The game was created using RenPy, which uses an adapted version
            of Python to code. I had to work with a partner to write the story,
            decide on what assets were needed, and impliment them.
            <br />
            <i>Art assets created by peer Hayley Rakowski.</i>
          </p>
        </div>
      </header>
      <a href="/OneTruthOneLieOneChoice">
        {data.map((project) => (
          <Cell
            data={project}
            key={project.title}
          />
        ))}
      </a>
      <img src="/images/projects/Visual/keitaro.png" alt="test" width="25%" />
      <img src="/images/projects/Visual/daigo.png" alt="test" width="25%" />
      <img src="/images/projects/Visual/teri.png" alt="test" width="25%" />
      <img src="/images/projects/Visual/window_icon.png" alt="test" width="20%" />
      <br />
      <img src="/images/projects/Visual/choice_hover_background.png" alt="test" width="98%" />
      <img src="/images/projects/Visual/main.png" alt="test" width="48%" /> &nbsp;
      <img src="/images/projects/Visual/hall.png" alt="test" width="48%" />
    </article>
  </Main>
);

export default Project2;
