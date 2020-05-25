import React from 'react';

// Landing
const ScratchLanding = React.lazy(() => import('./App/layout/ScratchLayout'))
const Wizard = React.lazy(() => import('./App/ppdb/Wizard'));
const Login = React.lazy(() => import('./App/ppdb/Logina'));
const Main = React.lazy(() => import('./App/ppdb/Wakasis'));
const Pengumuman = React.lazy(() => import('./App/ppdb/Pengumuman'));

const route = [  
  { path: '/', exact: true, name: 'ScratchLanding', component: ScratchLanding },
  { path: '/main', exact: true, name: 'Main', component: Main },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/wizard', exact: true, name: 'Wizard', component: Wizard },
  { path: '/pengumuman', exact: true, name: 'Pengumuman', component: Pengumuman }
];

export default route;