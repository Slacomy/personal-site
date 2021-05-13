import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';

const data = [
  {
    title: 'Revival',
    subtitle: '',
    link: '/Revival',
    image: '/images/projects/Revival/title.png',
    date: '2010-10-20',
    desc: '',
  },
];

const Project2 = () => (
  <Main
    title="Revival"
    description="Learn more about Sam Lacomy's Magazine"
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Revival</Link></h2>
          <p>
            <b>Concept:</b><br />
            A goth fashion magazine, with set brand assets as well as
            monthly changing aspects.
            <br />
            <b>Hardware/Software:</b><br />
            Originally created in Clip Studio Paint, the cover and
            feature spread were both later redone through collage. The contents
            page and content page were both created in Indesign.
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
        <img src="/images/projects/Revival/feature.png" alt="test" width="100%" />&nbsp;
        <img src="/images/projects/Revival/cover.png" alt="test" width="49%" /> &nbsp;
        <img src="/images/projects/Revival/single.png" alt="test" width="49%" />

      </span>
    </article>
  </Main>
);

export default Project2;
