import React from 'react';

// Public Area
// const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));

// Landing
const Landing = React.lazy(() => import('./Demo/Public/Landing/Landing'));
// Pendaftaran
const Pendaftaran = React.lazy(() => import('./Demo/Public/Pendaftaran/Pendaftaran'));
// Pengumuman
const Pengumuman = React.lazy(() => import('./Demo/Public/Pengumuman/Pengumuman'));


const route = [
    // { path: '/auth/signup-1', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/landing', exact: true, name: 'Signin 1', component: Landing },
    { path: '/pendaftaran', exact: true, name: 'Signin 1', component: Pendaftaran },
    { path: '/pengumuman', exact: true, name: 'Signin 1', component: Pengumuman }
];

export default route;