<template>
    <div class=" flex flex-cols-4 gap-5 mx-auto mt-10 justify-center">
        <productCard v-for="i in 4"></productCard>
    </div>
</template>

<script setup>
import productCard from './productCard.vue';

</script>