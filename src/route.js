import React from 'react';

// Public Area
// const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Login = React.lazy(() => import('./App/ppdb/Login'));

// Landing
// const Landing = React.lazy(() => import('./App/ppdb/Landing'));
const Landing = React.lazy(() => import('./App/layout/ScratchLayout'))

// Pendaftaran
const Pendaftaran = React.lazy(() => import('./App/ppdb/Pendaftaran'));
const Signin = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));

// Pengumuman
const Pengumuman = React.lazy(() => import('./App/ppdb/Pengumuman'));

const route = [
    // { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },    
    { path: '/', exact: true, name: 'Landing Page', component: Landing },
    { path: '/login', exact: true, name: 'Login', component: Login },
    { path: '/pendaftaran', exact: true, name: 'Pendaftaran', component: Pendaftaran },
    { path: '/signin', exact: true, name: 'Pendaftaran', component: Signin },
    { path: '/pengumuman', exact: true, name: 'Pengumuman', component: Pengumuman }
];

export default route;