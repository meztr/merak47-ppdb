import React from 'react';

// Public Area
// const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const cLogin = React.lazy(() => import('./App/ppdb/Login'));

// Landing
// const Landing = React.lazy(() => import('./App/ppdb/Landing'));
const Landing = React.lazy(() => import('./App/layout/ScratchLayout'))

// Pendaftaran
const Pendaftaran = React.lazy(() => import('./App/ppdb/Pendaftaran'));
const Login = React.lazy(() => import('./App/ppdb/Logina'));

// Main
const Claire = React.lazy(() => import('./App/ppdb/Main'));
const Wakasis = React.lazy(() => import('./App/ppdb/Wakasis'));

// Pengumuman
const Pengumuman = React.lazy(() => import('./App/ppdb/Pengumuman'));

const route = [
    // { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },    
    { path: '/', exact: true, name: 'Landing Page', component: Landing },
    { path: '/claire', exact: true, name: 'Main', component: Claire },
    { path: '/main', exact: true, name: 'cLogin', component: Wakasis },
    { path: '/pendaftaran', exact: true, name: 'Pendaftaran', component: Pendaftaran },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/pengumuman', exact: true, name: 'Pengumuman', component: Pengumuman }
];

export default route;