import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const CrossOverBar = lazy(() => import('./pages/CrossOverBar'));
const PlayHousePilotGame = lazy(() => import('./pages/PlayHousePilotGame'));
const BreakfastBreakoutGame = lazy(() => import('./pages/BreakfastBreakoutGame'));
const Feed = lazy(() => import('./pages/Feed'));
const XiaMoore = lazy(() => import('./pages/XiaMoore'));
const OneChoice = lazy(() => import('./pages/OneChoice'));
const Revival = lazy(() => import('./pages/Revival'));
const SkeletonHunter = lazy(() => import('./pages/SkeletonHunter'));
const Storybook = lazy(() => import('./pages/Storybook'));
const Resume = lazy(() => import('./pages/Resume'));
const DemoReel = lazy(() => import('./pages/DemoReel'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/CrossOverBar" component={CrossOverBar} />
        <Route path="/PlayHousePilotGame" component={PlayHousePilotGame} />
        <Route path="/BreakfastBreakoutGame" component={BreakfastBreakoutGame} />
        <Route path="/Feed" component={Feed} />
        <Route path="/XiaMoore" component={XiaMoore} />
        <Route path="/OneChoice" component={OneChoice} />
        <Route path="/Revival" component={Revival} />
        <Route path="/SkeletonHunter" component={SkeletonHunter} />
        <Route path="/Storybook" component={Storybook} />
        <Route path="/contact" component={Contact} />
        <Route path="/DemoReel" component={DemoReel} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
