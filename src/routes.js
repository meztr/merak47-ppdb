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

const Logout = React.lazy(() => import('./App/ppdb/Protected/Logout'))

const routes = [
    { path: '/user/beranda', exact:true, name: 'Default', component: BerandaPrivate },
    { path: '/user/news', exact:true, name: 'News', component: News },
    { path: '/user/biodata', exact:true, name: 'Biodata', component: Biodata },
    { path: '/user/cetak', exact:true, name: 'CetakBukti', component: CetakBukti },
    { path: '/user/panduan', exact:true, name: 'Panduan', component: Panduan },
    { path: '/user/logout', exact:true, name: 'logout', component: Logout },
];

export default routes;