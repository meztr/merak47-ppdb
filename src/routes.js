import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

// Private Area
// Beranda
const BerandaPrivate = React.lazy(() => import('./App/ppdb/Protected/Calon/Beranda/Beranda'));
// News
const News = React.lazy(() => import('./App/ppdb/Protected/Calon/News/News'));
// Biodata
const Biodata = React.lazy(() => import('./App/ppdb/Protected/Calon/Biodata/Biodata'));
// Cetak Bukti Pendaftaran
const CetakBukti = React.lazy(() => import('./App/ppdb/Protected/Calon/CetakBukti/CetakBukti'));
// Panduan
const Panduan = React.lazy(() => import('./App/ppdb/Protected/Calon/Panduan/Panduan'));

const routes = [
    { path: '/user/beranda', exact:true, name: 'Default', component: BerandaPrivate },
    { path: '/user/news', exact:true, name: 'Default', component: News },
    { path: '/user/biodata', exact:true, name: 'Default', component: Biodata },
    { path: '/user/cetak', exact:true, name: 'Default', component: CetakBukti },
    { path: '/user/panduan', exact:true, name: 'Default', component: Panduan },
];

export default routes;