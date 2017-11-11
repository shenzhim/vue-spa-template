<template>
    <div class="hello" v-if="showPage">
        <h1>{{ msg }}</h1>
        <router-link to="/about">About</router-link>
        <home-child></home-child>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import HomeChild from '@/vue/HomeChild'

    export default {
        name: 'Home',
        data() {
            return {
                showPage: false,
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            HomeChild
        },
        methods: {
            ...mapMutations(['changeLoading'])
        },
        created(){
            console.log("home created")
            this.changeLoading(true);
            setTimeout(()=>{
                this.changeLoading(false);
                this.showPage = true
            }, 500);
        },
        activated(){
            console.log("home activated")
        },
        deactivated(){
            console.log("home deactivated")
        }
    }
</script>

<style>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>