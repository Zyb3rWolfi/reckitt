<template>

    

<div class=" w-11/12 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class=" flex justify-center items-center">
        <img class="p-8 rounded-t-lg" width="70%" :src="props.product.image" alt="product image" />

    </div>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{{ props.product.name }}</h5>
        </a>
        <div class="flex items-center justify-between mt-5">
            <span class="text-xl font-bold text-gray-900 dark:text-white">${{props.product.price}}</span>
        </div>
    </div>
</div>


</template>

<script setup>

const props = defineProps({
    product: Object
})

</script>