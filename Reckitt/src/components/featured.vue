<template>

    <h2 class=" text-4xl mt-12 mb-12 text-center">FEATURED</h2>
    <div class=" flex flex-cols-3 mx-auto justify-center gap-10">
        <productCard v-for="i in 3"></productCard>

    </div>
</template>

<script setup>
import productCard from './productCard.vue';
</script>