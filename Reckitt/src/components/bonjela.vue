<template>
    <div class=" flex flex-cols-4 gap-5 mx-auto mt-10 justify-center">
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