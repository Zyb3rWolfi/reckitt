<template>
    <div class="relative">
        <img width="100%" alt="Banner" class="h-36 lg:h-full" src="../../public/banner.png">
        <div class="absolute inset-0 flex items-center text-6xl justify-center text-white">
            <h1 class="lg:text-6xl text-2xl">{{ productName}}</h1>
        </div>
    </div>
    <router-view></router-view>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import footer from '../components/footer.vue';

const route = useRoute();
const productName = computed(() => {
    const path = route.path;
    const parts = path.split('/');
    return parts[2].toUpperCase();
});
</script>