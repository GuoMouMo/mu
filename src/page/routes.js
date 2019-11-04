import loadable from '@loadable/component';
import test from './test/routes';

const routes = [
    {
        path: "/main",
        routes: test,
    },
];

export default routes;
