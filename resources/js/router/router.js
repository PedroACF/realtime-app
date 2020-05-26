import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login/Login';
import Logout from '../components/login/Logout';
import SignUp from "../components/login/SignUp";
import Forum from '../components/forum/Forum';

Vue.use(VueRouter);

const routes = [
    {
        name: 'forum',
        path: '/forum',
        component: Forum
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
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;