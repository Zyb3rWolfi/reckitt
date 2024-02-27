<template>
    <div class=" grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto mt-10 justify-center">
        <productCard v-for="i in bonjela" :product="i"></productCard>
    </div>
</template>

<script setup>
import productCard from './productCard.vue';
import json from '../assets/products.json';

var bonjela = json.products.filter((product) => {
    return product.brand.includes("bonjela")
})

</script>