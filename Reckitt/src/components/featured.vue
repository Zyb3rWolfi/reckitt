<template>

    <h2 class=" text-4xl mt-12 mb-12 text-center">FEATURED</h2>
    <div class=" grid grid-cols-3">
        <productCard v-for="i in 3"></productCard>

    </div>
</template>

<script setup>
import productCard from './productCard.vue';
</script>