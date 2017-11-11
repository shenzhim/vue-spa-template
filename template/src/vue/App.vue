<template>
    <div id="app">
        <img src="~@/assets/logo.png">
        <keep-alive>
            <router-view/>
        </keep-alive>
        <loading/>
    </div>
</template>

<script>
    import Loading from '@/components/Loading'

    export default {
        name: 'app',
        components:{ 
            Loading 
        }
    }
</script>

<style>
    @charset "utf-8";
    @import "../css/reset";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>