import React from 'react';

const Item1 = React.lazy(() => import('./views/item1/Item1'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/item1', name: 'Item1', component: Item1 }
];

export default routes;
