import loadComponent from 'utils/codeSplit';
import loadable from '@loadable/component';

const routes = [
    {
        path: "/main",
        component: loadable(() => import('./home/home')),
    },
    {
        path: "/main/about",
        component: loadable(() => import('./other/other')),
    },
    {
        path: "/main/ssr",
        component: loadable(() => import('./ssr/index')),
    }
];

export default routes;
