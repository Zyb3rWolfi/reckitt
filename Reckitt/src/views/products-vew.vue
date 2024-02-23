<template>
    <div class="relative">
        <img width="100%" class="" src="../../public/banner.png">
        <div class="absolute inset-0 flex items-center text-6xl justify-center text-white">
            <h1 class="">{{ productName}}</h1>
        </div>
    </div>
    <router-view></router-view>
</template>
<script setup>
import {useRoute } from 'vue-router';
import {onMounted, onBeforeMount, ref} from 'vue';

const route = useRoute();
var productName = "";

onBeforeMount(() => {
    productName = route.path;
    productName = productName.split('/')[2].toLocaleUpperCase()
})


</script>