<template>
    <div>
        <transition name="fade" mode="out-in">
            <router-view>
            </router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "App",

    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to
        /* .component-fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>