import loadable from '@loadable/component';

const routes = [
    {
        path: "/test",
        component: loadable(() => import('./home/home')),
        routes: [
            {
                path: "/about",
                component: loadable(() => import('./other/other')),
            },
            {
                path: "/ssr",
                component: loadable(() => import('./ssr/index')),
            },
            {
                path: "/main2",
                component: loadable(() => import('./home/home')),
                routes: [
                    {
                        path: "/main2/:id",
                        component: loadable(() => import('./other/other')),
                    },
                ]
            }
        ]
    },
];

export default routes;
