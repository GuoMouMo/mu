// import loadable from '@loadable/component'
import Home from './home/home';

export default [
    {
        path: '/',
        component: Home,
        // indexRoute: {
        //     component: Dashboard
        // },
        // childRoutes: [
        //     {
        //         path: 'about',
        //         component: About
        //     },
        //     {
        //         path: 'inbox',
        //         component: Inbox,
        //         childRoutes: [
        //             {
        //                 path: '/messages/:id',
        //                 component: Message
        //             },
        //             {
        //                 path: 'messages/:id',
        //                 onEnter: function (nextState, replaceState) {
        //                     replaceState(null, '/messages/' + nextState.params.id)
        //                 }
        //             }
        //         ]
        //     }
        // ]
    }
]
