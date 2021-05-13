import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Xia Moore Cosplay',
    subtitle: '',
    link: '/XiaMoore',
    image: '/images/projects/XiaMoore/title.png',
    date: '2010-10-20',
    desc: '',
  },
];

const Project2 = () => (
  <Main
    title="XiaMoore"
    description="Learn more about Sam Lacomy's Cosplay brand"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/XiaMoore">Xia Moore Cosplay</Link></h2>
          <p>desc of Xia Moore</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      <img src="/images/projects/XiaMoore/logo.png" alt="test" width="35%" /> &nbsp;  &nbsp;
      <img src="/images/projects/XiaMoore/tags.png" alt="test" width="60%" />&nbsp;  &nbsp;
      <img src="/images/projects/XiaMoore/Mailer.png" alt="test" width="35%" />&nbsp;  &nbsp;
      <img src="/images/projects/XiaMoore/Businesscard.png" alt="test" width="60%" />
    </article>
  </Main>
);

export default Project2;
