import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

// Private Area
// Beranda
const BerandaPrivate = React.lazy(() => import('./Demo/aPrivate/Beranda/Beranda'));
// News
const News = React.lazy(() => import('./Demo/aPrivate/News/News'));
// Biodata
const Biodata = React.lazy(() => import('./Demo/aPrivate/Biodata/Biodata'));
// Cetak Bukti Pendaftaran
const CetakBukti = React.lazy(() => import('./Demo/aPrivate/CetakBukti/CetakBukti'));
// Panduan
const Panduan = React.lazy(() => import('./Demo/aPrivate/Panduan/Panduan'));

const routes = [
    { path: '/user/beranda', exact:true, name: 'Default', component: BerandaPrivate },
    { path: '/user/news', exact:true, name: 'Default', component: News },
    { path: '/user/biodata', exact:true, name: 'Default', component: Biodata },
    { path: '/user/cetak', exact:true, name: 'Default', component: CetakBukti },
    { path: '/user/panduan', exact:true, name: 'Default', component: Panduan },
];

export default routes;