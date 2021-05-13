const routes = [
  {
    index: true,
    label: 'Sam Lacomy',
    path: '/',
  },
  {
    label: 'Resume',
    path: '/resume/',
  },
  {
    label: 'Games',
    path: '#',
    children: [
      {
        label: 'Breakfast Breakout',
        path: '/BreakfastBreakoutGame',
      },
      {
        label: 'PlayHouse Pilot',
        path: '/PlayHousePilotGame',
      },
      {
        label: 'Skeleton Hunter',
        path: '/SkeletonHunter',
      },
      {
        label: 'Visual Novel',
        path: '/OneChoice',
      },
    ],
  },
  {
    label: 'Projects',
    path: '#',
    children: [
      {
        label: 'CrossOver Bar',
        path: '/CrossOverBar',
      },
      {
        label: 'Xia Moore Cosplay',
        path: '/XiaMoore',
      },
      {
        label: 'FEED nonprofit',
        path: '/Feed',
      },
      {
        label: 'Revival',
        path: '/Revival',
      },
      {
        label: 'Storybook',
        path: '/Storybook',
      },
    ],
  },
  {
    label: 'About Me',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
