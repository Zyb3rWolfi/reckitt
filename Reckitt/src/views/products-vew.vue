<template>
    <div class="relative">
        <img width="100%" class="h-36 lg:h-full" src="../../public/banner.png">
        <div class="absolute inset-0 flex items-center text-6xl justify-center text-white">
            <h1 class="lg:text-6xl text-2xl">{{ productName}}</h1>
        </div>
    </div>
    <router-view></router-view>
</template>
<script setup>
import {useRoute } from 'vue-router';
import {onMounted, onBeforeMount, ref, onUpdated} from 'vue';
import footer from '../components/footer.vue';

const route = useRoute();
var productName = "";


onUpdated(() => {
    productName = route.path;
    productName = productName.split('/')[2].toLocaleUpperCase()
})

onBeforeMount(() => {
    productName = route.path;
    productName = productName.split('/')[2].toLocaleUpperCase()
})

</script>