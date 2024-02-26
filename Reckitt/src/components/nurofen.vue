<template>
    <div class=" grid grid-cols-5 gap-5 mx-auto mt-10 justify-items-center">
        <productCard v-for="i in nurofen" :product="i"></productCard>
    </div>
</template>

<script setup>
import productCard from './productCard.vue';
import json from '../assets/products.json';

var nurofen = json.products.filter((product) => {
    return product.brand.includes("nurofen")
})

</script>