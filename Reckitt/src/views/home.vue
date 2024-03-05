<template>

    <div class="relative">
        <img alt="Banner" width="100%" class=" h-36 lg:h-full" src="../../public/banner.png">
        <div class="absolute inset-0 flex items-center justify-center text-white">
            <h1 class="lg:text-6xl text-2xl">RECKITT ONLINE STORE</h1>
        </div>
        
    </div>
    <featured></featured>
    <brands></brands>
</template>
<script setup>
import featured from '../components/featured.vue';
import brands from '../components/brands.vue';

</script>