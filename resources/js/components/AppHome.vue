<template>
<div>
    <app-bar></app-bar>
    <router-view></router-view>
    <app-footer></app-footer>
</div>
</template>

<script>
import AppBar from './AppBar';
import Footer from './AppFooter';
import Login from './login/Login';

export default {
    components: {
        AppBar,
        'app-footer': Footer,
        Login
    }
}
</script>
