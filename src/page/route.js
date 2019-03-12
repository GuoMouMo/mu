import loadComponent from 'utils/codeSplit';

const routes = [
    {
        path: "/program",
        component: loadComponent(() => import('./home/home')),
    },
    {
        path: "/program/about",
        component: loadComponent(() => import('./other/other')),
    }
];

export default routes;
