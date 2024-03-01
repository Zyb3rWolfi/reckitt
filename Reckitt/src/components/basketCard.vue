<template>
        <div class="max-w-4xl p-6 bg-white border col-span-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
        
            <div class="grid grid-cols-3 gap-5">
                <div class="col-start-1">
                    <img :src="props.product[0].image" alt="Mountain" class="h-12 sm:h-48 object-cover">
                </div>
                <div class="col-start-2">
                    <h1 class="text-xl font-medium text-gray-800 dark:text-white">{{ props.product[0].name}}</h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-400">IN STOCK</p>
                    <p @click="removeItem" class="mt-12">DELETE</p>
                </div>
                <div class=" col-start-3 justify-end justify-items-end">
                    <p class=" text-end">£{{ props.product[0].price}}</p>
                    <div class=" flex text-end justify-end justify-items- mt-12">
                        <p @click="decrement" class="text-2xl mr-2">-</p>
                        <p class="text-end">{{props.product[0].quantity}}</p>
                        <p @click="increment" class="text-2xl ml-2 ">+</p>
                    </div>
                </div>
        
            </div>
        
        </div>
</template>

<script setup>

const props = defineProps({
    product: Object
})

function removeItem() {
    var storedItems = JSON.parse(localStorage.getItem('basket'));

    for (var i = 0; i < storedItems.length; i++) {
        if (storedItems[i][0].name == props.product[0].name) {
            storedItems.splice(i, 1);
            localStorage.setItem('basket', JSON.stringify(storedItems));
            location.reload();
        }
    }
}

function increment() {
    var storedItems = JSON.parse(localStorage.getItem('basket'));

    for (var i = 0; i < storedItems.length; i++) {
        if (storedItems[i][0].name == props.product[0].name) {
            storedItems[i][0].quantity += 1;
            localStorage.setItem('basket', JSON.stringify(storedItems));
            location.reload();
        }
    }
}

function decrement() {
    var storedItems = JSON.parse(localStorage.getItem('basket'));

    for (var i = 0; i < storedItems.length; i++) {
        if (storedItems[i][0].name == props.product[0].name) {
            if (storedItems[i][0].quantity > 1) {
                storedItems[i][0].quantity -= 1;
                localStorage.setItem('basket', JSON.stringify(storedItems));
                location.reload();
            }
        }
    }
}

</script>