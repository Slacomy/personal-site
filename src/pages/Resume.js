import React from 'react';
// import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <article className="post" id="stats">
      <a href="/images/SamLacomy_Resume.pdf" download>
        <img src="/images/SamLacomy_Resume.jpg" alt="ugh" width="100%" />
      </a>
    </article>
  </Main>
);

export default Stats;
