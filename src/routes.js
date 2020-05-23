import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

// Private Area
// Beranda
const Beranda = React.lazy(() => import('./App/ppdb/Protected/Calon/Beranda/Beranda'));
// News
const News = React.lazy(() => import('./App/ppdb/Protected/Calon/News/News'));
// Biodata
const Biodata = React.lazy(() => import('./App/ppdb/Protected/Calon/Biodata/Biodata'));
// Cetak Bukti Pendaftaran
const CetakBukti = React.lazy(() => import('./App/ppdb/Protected/Calon/CetakBukti/CetakBukti'));
// Panduan
const Panduan = React.lazy(() => import('./App/ppdb/Protected/Calon/Panduan/Panduan'));

const Logout = React.lazy(() => import('./App/ppdb/Protected/Logout'));

const UserProfile = React.lazy(() => import('./App/ppdb/Protected/UserProfile'));

// Panitia
const Dashboard = React.lazy(() => import('./App/ppdb/Protected/Panitia/Dashboard'));
const Progress = React.lazy(() => import('./App/ppdb/Protected/Panitia/Progress'));
const Manage = React.lazy(() => import('./App/ppdb/Protected/Panitia/Manage'));
const Toa = React.lazy(() => import('./App/ppdb/Protected/Panitia/Toa'));

// Admin/Bendahara
const Bendahara = React.lazy(() => import('./App/ppdb/Protected/Panitia/Bendahara'));
const AdminPage = React.lazy(() => import('./App/ppdb/Protected/Panitia/AdminPage'));

// const routes = [
//   { path: '/user/beranda', exact:true, name: 'Default', role: 755, component: Beranda },
//   { path: '/user/news', exact:true, name: 'News', role: 755, component: News },
//   { path: '/user/biodata', exact:true, name: 'Biodata', role: 755, component: Biodata },
//   { path: '/user/cetak', exact:true, name: 'CetakBukti', role: 755, component: CetakBukti },
//   { path: '/user/panduan', exact:true, name: 'Panduan', role: 755, component: Panduan },
//   { path: '/user/logout', exact:true, name: 'logout', role: 755, component: Logout },
//   { path: '/user/profile', exact:true, name: 'UserProfile', role: 775, component: UserProfile },
//   // panitia
//   { path: '/user/panitia/dashboard', exact:true, name: 'Dashboard', role: 775, component: Dashboard },
//   { path: '/user/panitia/progress', exact:true, name: 'Progress', role: 775, component: Progress },
//   { path: '/user/panitia/manage', exact:true, name: 'Manage', role: 775, component: Manage },
//   { path: '/user/panitia/toa', exact:true, name: 'Toa', role: 775, component: Toa },
//   // admin/bendahara
//   { path: '/user/panitia/adminpage', exact:true, name: 'AdminPage', role: 777, component: AdminPage },
//   { path: '/user/panitia/bendahara', exact:true, name: 'Bendahara', role: 777, component: Bendahara },
// ];

// const routes = [  
//   {
//     755: [
//       { path: '/user/beranda', exact:true, name: 'Default', component: Beranda },
//       { path: '/user/news', exact:true, name: 'News', component: News },
//       { path: '/user/biodata', exact:true, name: 'Biodata', component: Biodata },
//       { path: '/user/cetak', exact:true, name: 'CetakBukti', component: CetakBukti },
//       { path: '/user/panduan', exact:true, name: 'Panduan', component: Panduan },
//       { path: '/user/logout', exact:true, name: 'logout', component: Logout }
//     ]
//   },

//   {
//     775: [
//       { path: '/user/profile', exact:true, name: 'UserProfile', component: UserProfile },
//       // panitia
//       { path: '/user/panitia/dashboard', exact:true, name: 'Dashboard', component: Dashboard },
//       { path: '/user/panitia/progress', exact:true, name: 'Progress', component: Progress },
//       { path: '/user/panitia/manage', exact:true, name: 'Manage', component: Manage },
//       { path: '/user/panitia/toa', exact:true, name: 'Toa', component: Toa },
//       { path: '/user/logout', exact:true, name: 'logout', component: Logout }
//     ] 
//   },

//   {
//     777: [
//       { path: '/user/profile', exact:true, name: 'UserProfile', component: UserProfile },
//       // panitia
//       { path: '/user/panitia/dashboard', exact:true, name: 'Dashboard', component: Dashboard },
//       { path: '/user/panitia/progress', exact:true, name: 'Progress', component: Progress },
//       { path: '/user/panitia/manage', exact:true, name: 'Manage', component: Manage },
//       { path: '/user/panitia/toa', exact:true, name: 'Toa', component: Toa },
//       // admin/bendahara
//       { path: '/user/panitia/adminpage', exact:true, name: 'AdminPage', component: AdminPage },
//       { path: '/user/panitia/bendahara', exact:true, name: 'Bendahara', component: Bendahara },
//       { path: '/user/logout', exact:true, name: 'logout', component: Logout }
//     ]
//   }
// ];

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