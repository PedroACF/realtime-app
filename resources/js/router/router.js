import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login/Login';
import Logout from '../components/login/Logout';
import SignUp from "../components/login/SignUp";
import Forum from '../components/forum/Forum';
import Read from '../components/forum/Read';
import Create from '../components/forum/Create';
import CreateCategory from '../components/category/Create';

import Parallax from '../components/Parallax';

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/',
        component: Parallax
    },
    {
        name: 'forum',
        path: '/forum',
        component: Forum
    },
    {
        name: 'read',
        path: '/question/:slug',
        component: Read
    },
    {
        path: '/ask',
        component: Create
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/category',
        component: CreateCategory
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;