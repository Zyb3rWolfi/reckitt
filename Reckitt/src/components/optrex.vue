<template>
    <div class=" grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto mt-10 justify-items-center">
        <productCard v-for="i in optrex" :product="i"></productCard>
    </div>
</template>

<script setup>
import productCard from './productCard.vue';
import json from '../assets/products.json';

var optrex = json.products.filter((product) => {
    return product.brand.includes("optrex")
})

</script>