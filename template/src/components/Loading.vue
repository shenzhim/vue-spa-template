<template>
    <div id="page-loading" class="loading" v-show="showLoading">
        <div class="pacman">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div>正在加载...</div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
        name: 'loading',
        computed: mapState(['showLoading'])
    }

</script>
<style>
    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 375px;
        height: 260px;
        font-size: 56px;
        color: #aaa;
        text-align: center;
        z-index: 9999;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%)
    }

    .pacman {
        position: relative;
        margin-bottom: 20px;
        height: 160px;
        width: 384px;
        overflow: hidden
    }

    .pacman>div:first-of-type,
    .pacman>div:nth-child(2) {
        position: absolute;
        width: 0;
        height: 0;
        border-right: 72px solid transparent;
        border-top: 72px solid #fd6161;
        border-left: 72px solid #fd6161;
        border-bottom: 72px solid #fd6161;
        border-radius: 72px;
        z-index: 10
    }

    .pacman>div:first-of-type {
        animation: rotate_pacman_half_up .4s 0s infinite
    }

    .pacman>div:nth-child(2) {
        animation: rotate_pacman_half_down .4s 0s infinite
    }

    .pacman>div:nth-child(3),
    .pacman>div:nth-child(4),
    .pacman>div:nth-child(5),
    .pacman>div:nth-child(6) {
        border-radius: 100%;
        margin: 8px;
        width: 40px;
        height: 40px;
        position: absolute;
        transform: translate(0, -18.75px);
        top: 72px;
        left: 320px
    }

    .pacman>div:nth-child(3) {
        animation: pacman-balls 1.2s .8s infinite linear;
        background-color: #6fe4ca
    }

    .pacman>div:nth-child(4) {
        animation: pacman-balls 1.2s .4s infinite linear;
        background-color: #8ac4ff
    }

    .pacman>div:nth-child(5) {
        animation: pacman-balls 1.2s infinite linear;
        background-color: #ffc171
    }

    @keyframes rotate_pacman_half_up {
        0%,
        100% {
            transform: rotate(270deg)
        }
        50% {
            transform: rotate(360deg)
        }
    }

    @keyframes rotate_pacman_half_down {
        0%,
        100% {
            transform: rotate(90deg)
        }
        50% {
            transform: rotate(0)
        }
    }

    @keyframes pacman-balls {
        75% {
            opacity: .7
        }
        100% {
            transform: translate(-252px, -18.75px)
        }
    }
</style>
