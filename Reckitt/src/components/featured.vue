<template>

    <h2 class=" text-4xl mt-12 mb-12 text-center">FEATURED</h2>
    <div class=" grid grid-cols-5 gap-5 mx-auto mt-10 justify-items-center">
        <productCard v-for="i in json.products" :product="i"></productCard>

    </div>
</template>

<script setup>
import productCard from './productCard.vue';
import json from '../assets/products.json';

console.log(json)
</script>