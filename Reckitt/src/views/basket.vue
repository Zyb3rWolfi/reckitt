<template>
    <div class="relative">
        <img alt="banner" width="100%" class="h-36 lg:h-full" src="../../public/banner.png">
        <div class="absolute inset-0 flex items-center text-6xl justify-center text-white">
            <h1 class="lg:text-6xl text-2xl">YOUR BASKET</h1>
        </div>
    </div>

    <div class="  grid mx-auto lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 justify-center mt-12 lg:ml-20 lg:mr-20 ml-5 mr-5 gap-5">
        <div class=" lg:col-start-1 lg:col-span-2">
            <basketCardVue v-for="i in storedItems" :product="i"></basketCardVue>
            <div v-if="storedItems == null" class=" flex justify-center mx-auto text-xl mt-5">
                <p>Basket is empty</p>

            </div>
        </div>
        <div class=" lg:col-start-3">
            <div class="max-w-4xl p-6 bg-white border col-span-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <p class="text-xl"> <strong>Subtotal: £{{price}}</strong></p>
                <div class="flex mx-auto justify-center">
                    <router-link :to="'/buy'" type="submit" class=" mt-6 pl-24 pr-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</router-link>
                </div>
            </div>
        </div>
        
    </div>



</template>

<script setup> 
import basketCardVue from '../components/basketCard.vue';
var storedItems = JSON.parse(localStorage.getItem('basket'));

var price = 0;
if (storedItems != null) {
    for (var i = 0; i < storedItems.length; i++) {
        price += storedItems[i][0].price * storedItems[i][0].quantity;
        console.log(storedItems[i][0].price);
    }

}

</script>