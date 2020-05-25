import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Beranda = React.lazy(() => import('./App/ppdb/Protected/Calon/Beranda/Beranda'));
const News = React.lazy(() => import('./App/ppdb/Protected/Calon/News/News'));
const Biodata = React.lazy(() => import('./App/ppdb/Protected/Calon/Biodata/Biodata'));
const CetakBukti = React.lazy(() => import('./App/ppdb/Protected/Calon/CetakBukti/CetakBukti'));
const Panduan = React.lazy(() => import('./App/ppdb/Protected/Calon/Panduan/Panduan'));
const Logout = React.lazy(() => import('./App/ppdb/Protected/Logout'));
const UserProfile = React.lazy(() => import('./App/ppdb/Protected/UserProfile'));
const Dashboard = React.lazy(() => import('./App/ppdb/Protected/Panitia/Dashboard'));
const Progress = React.lazy(() => import('./App/ppdb/Protected/Panitia/Progress'));
const Manage = React.lazy(() => import('./App/ppdb/Protected/Panitia/Manage'));
const Toa = React.lazy(() => import('./App/ppdb/Protected/Panitia/Toa'));
const Bendahara = React.lazy(() => import('./App/ppdb/Protected/Panitia/Bendahara'));
const AdminPage = React.lazy(() => import('./App/ppdb/Protected/Panitia/AdminPage'));

const routes = [
  { path: '/user/beranda', exact:true, name: 'Default', component: Beranda },
  { path: '/user/news', exact:true, name: 'News', component: News },
  { path: '/user/biodata', exact:true, name: 'Biodata', component: Biodata },
  { path: '/user/cetak', exact:true, name: 'CetakBukti', component: CetakBukti },
  { path: '/user/panduan', exact:true, name: 'Panduan', component: Panduan },
  { path: '/user/logout', exact:true, name: 'logout', component: Logout },
  { path: '/user/profile', exact:true, name: 'UserProfile', component: UserProfile },
  // panitia
  { path: '/user/panitia/dashboard', exact:true, name: 'Dashboard', component: Dashboard },
  { path: '/user/panitia/progress', exact:true, name: 'Progress', component: Progress },
  { path: '/user/panitia/manage', exact:true, name: 'Manage', component: Manage },
  { path: '/user/panitia/toa', exact:true, name: 'Toa', component: Toa },
  // admin/bendahara
  { path: '/user/panitia/bendahara', exact:true, name: 'Bendahara', component: Bendahara },
  { path: '/user/panitia/adminpage', exact:true, name: 'AdminPage', component: AdminPage },
];

export default routes;