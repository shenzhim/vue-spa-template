<template>
    <div v-if="showPage">
        <h1>{{msg}}</h1>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        name: 'about',
        data() {
            return {
                showPage: false,
                msg : "this is About page"
            }
        },
        methods: {
            ...mapMutations(['changeLoading'])
        },
        created(){
            console.log("about created");
            this.changeLoading(true);
            setTimeout(()=>{
                this.changeLoading(false);
                this.showPage = true;
            }, 500);
        },
        activated(){
            console.log("about activated")
        },
        deactivated(){
            console.log("about deactivated")
        }
    }
</script>

<style>

</style>