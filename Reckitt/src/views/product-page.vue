<template>
    <div class=" min-w-96 w-full grid grid-cols-1 grid-rows-2 lg:grid-cols-2">
        <div style="border-color: #ff007f;" class=" border-b-2 col-start-1 row-start-2 lg:row-start-1"> 
            <img :src="product[0].image" width="40%" height="40%" class="mx-auto"/>
        </div>

        <div class=" col-start-2 row-start-1" style="background-color: #ff007f;">
            <div class=" container"> 
                <h2 class=" text-4xl text-white m-5" style=" text-transform:uppercase">{{product[0].name}}</h2>
                <h3 class=" m-5 text-white">{{product[0].description}}</h3>
                <div class=" flex mt-12">
                    <div class="flex m-5 text-white">
                        <svg class="my-auto" xmlns="http://www.w3.org/2000/svg" width="35" height="41" viewBox="0 0 35 41"><path fill="#FFFFFF" fill-rule="nonzero" d="M18.55.7c-1.85 0-2.91 1.81-3.72 5.19-.48 1.9-1.01 3.16-1.5 3.68-.42.39-.92.95-1.49 1.68l-.4.51-.4.56-.44.6-.46.66-.15.23-.3.47-.16.25-.33.54-1.37 2.35-.13.2-.12.2-.22.33-.1.14-.07.1H5.53l-1.47-.02A3.3 3.3 0 00.7 21.6V33.2A3.3 3.3 0 004 36.3h3.34l2.03.73 1.66.58 1.53.53 1.07.36 1.32.42.9.28.85.25.52.15.5.13.68.18.42.1.4.08.36.07.33.05.3.05.15.01.26.02.24.01h1.31l.66-.02.87-.02.51-.02.23-.01c.92-.06 1.93-.28 3.05-.65a5.6 5.6 0 002.88-2l.14-.21c.57-.95.77-2.02.65-3.19l-.03-.2c.51-.73.88-1.57 1.11-2.51l.07-.3c.16-.81.17-1.62.05-2.42l-.05-.26.15-.27c.46-.83.74-1.75.82-2.77l.03-.32a7.29 7.29 0 00-.2-2.14l-.05-.2.05-.07a6.21 6.21 0 001.19-3.81c0-1.46-.56-2.76-1.65-3.85l-.2-.2a5.47 5.47 0 00-3.79-1.44h-5.35l.16-.33.28-.56c.86-1.7 1.3-3.25 1.3-4.68 0-1.36-.21-2.57-.64-3.6a4.98 4.98 0 00-1.98-2.46A7.26 7.26 0 0018.55.7zm0 2.6a4.76 4.76 0 012.55.72c.34.2.65.6.9 1.23.3.7.45 1.56.45 2.6 0 .9-.28 1.97-.86 3.19l-.66 1.33-.21.43-.18.4-.15.34-.06.15-.1.29-.08.25a2.4 2.4 0 00-.07.3 1.3 1.3 0 001.29 1.49h7.3c.85 0 1.55.28 2.15.88.6.6.88 1.25.88 2.01v.25a3.5 3.5 0 01-.71 2.05l-.1.12c-.51.3-.77.94-.56 1.55l.05.12c.28.6.4 1.34.31 2.23-.07.87-.35 1.6-.82 2.21a1.3 1.3 0 00-.21 1.17 4.77 4.77 0 01-.74 4l-.16.2a1.3 1.3 0 00-.28 1.13c.21.93.12 1.62-.25 2.17-.28.4-.8.75-1.57 1-.9.31-1.7.48-2.37.52l-.45.02-.79.03-.92.01-1.27.01h-.18l-.21-.03-.25-.03-.27-.05-.31-.06-.34-.08-.37-.09-.4-.1-.66-.18-.73-.21-.8-.24-.87-.27-1.25-.41-1.03-.34-1.08-.37-1.56-.55-2.1-.75-.44-.16a1.3 1.3 0 00-.45-.08H4a.7.7 0 01-.7-.7V21.63a.7.7 0 01.71-.66l1.97.03h1.18l.34-.01.28-.03c.37-.03.56-.1.73-.22l.12-.08.16-.14c.35-.37.7-.84 1.1-1.5l.33-.53 1.04-1.8.32-.54.3-.47.13-.22.27-.4.43-.6.4-.57.38-.51.35-.47.5-.6.3-.36c.2-.21.37-.4.53-.55.93-.98 1.6-2.58 2.18-4.9l.13-.5.13-.47.06-.21.13-.4.12-.35.12-.3.1-.26.1-.22.1-.18.1-.19.06-.08c.02-.03.04-.04.05-.04z"></path></svg>
                        <p class="my-auto ml-2">Suitable for <br><strong>Cold & flu</strong></p>
                    </div>
                    <div  class="flex m-5 text-white"> 
                        <svg class="my-auto" xmlns="http://www.w3.org/2000/svg" width="51" height="52" viewBox="0 0 51 52"><path fill="#FFFFFF" fill-rule="nonzero" d="M23.37 48.56h.13a23.09 23.09 0 004.75.03 1.3 1.3 0 11.26 2.59 25.6 25.6 0 01-5.3-.03 1.3 1.3 0 01.03-2.59h.13zm18.81-4.8A1.3 1.3 0 0142 45.6a25.33 25.33 0 01-4.4 2.9 1.3 1.3 0 11-1.2-2.32c1.4-.72 2.73-1.6 3.96-2.6a1.3 1.3 0 011.82.19zm-30.71-.32a22.74 22.74 0 003.92 2.63 1.3 1.3 0 01-1.22 2.3 25.34 25.34 0 01-4.37-2.94 1.3 1.3 0 111.67-2zM26 7.7a18.3 18.3 0 110 36.6 18.3 18.3 0 010-36.6zm0 2.6a15.7 15.7 0 100 31.4 15.7 15.7 0 000-31.4zm23.31 21.57c.69.21 1.07.94.86 1.63a25.16 25.16 0 01-2.08 4.84 1.3 1.3 0 11-2.27-1.27c.77-1.38 1.4-2.83 1.87-4.34a1.3 1.3 0 011.62-.86zm-45.06.64a22.55 22.55 0 001.82 4.36 1.3 1.3 0 01-2.29 1.25 25.15 25.15 0 01-2.03-4.87 1.3 1.3 0 012.5-.74zM26 13.7c.67 0 1.23.51 1.3 1.17V26a1.3 1.3 0 01-1.17 1.3H17.87a1.3 1.3 0 01-.13-2.6h6.96V15c0-.72.58-1.3 1.3-1.3zm0-13a25.2 25.2 0 0116.72 6.31l.07-1.97a1.3 1.3 0 011.2-1.25h.14c.67.02 1.2.55 1.25 1.21v.13l-.17 5A1.3 1.3 0 0144 11.38h-.13l-5-.17a1.3 1.3 0 01-.04-2.6h.13l1.7.06A22.7 22.7 0 003.3 26a1.3 1.3 0 01-2.6 0A25.3 25.3 0 0126 .7z"></path></svg>
                        <p class="my-auto ml-2">Action <br><strong>Long lasting</strong></p>

                    </div>
                    <div  class="flex m-5 text-white">
                        <svg class="my-auto" xmlns="http://www.w3.org/2000/svg" width="31.2" height="57.2" viewBox="0 0 31.2 57.2"><path fill="#FFFFFF" d="M26 0a3.9 3.9 0 013.9 3.9v11.7a3.9 3.9 0 01-3.9 3.9h-2.03l.3.45q.75 1.15 1.74 2.46l.32.4a23.4 23.4 0 014.87 14.3V50.7a6.5 6.5 0 01-6.5 6.5H6.5A6.5 6.5 0 010 50.7V37.11a23.4 23.4 0 014.54-13.85L5.49 22q1-1.34 1.74-2.5H5.2a3.9 3.9 0 01-3.9-3.9V3.9A3.9 3.9 0 015.2 0zm2.6 49.4h-26v1.3a3.9 3.9 0 003.67 3.9H24.7a3.9 3.9 0 003.9-3.67v-.23zm-1.82-20.8H4.42a20.8 20.8 0 00-1.81 7.96l-.01.55v9.69h26v-9.69a20.8 20.8 0 00-1.82-8.51zm-5.84-9.1H10.26l-.25.45a41.73 41.73 0 01-2.74 4.01l-.34.44q-.6.78-1.11 1.6h19.56q-.51-.81-1.11-1.6a41.22 41.22 0 01-3.34-4.9zM10.4 5.2a1.3 1.3 0 01-2.6 0V2.6H5.2a1.3 1.3 0 00-1.3 1.15V15.6a1.3 1.3 0 001.15 1.3H7.8v-2.6a1.3 1.3 0 012.6 0v2.6h3.9v-2.6a1.3 1.3 0 112.6 0v2.6h3.9v-2.6a1.3 1.3 0 112.6 0v2.6H26a1.3 1.3 0 001.3-1.15V3.9a1.3 1.3 0 00-1.15-1.3H23.4v2.6a1.3 1.3 0 11-2.6 0V2.6h-3.9v2.6a1.3 1.3 0 11-2.6 0V2.6h-3.9z"></path></svg>
                        <p class="my-auto ml-2">Format <br><strong>Liquid</strong></p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    <div>
        <h2 class="text-4xl text-center mt-10">Product Details</h2>
        <div class="grid grid-cols-4">
            <h3 class="col-start-2 text-xl mt-5 mb-2"><strong>description</strong></h3>
            <span class="border col-start-2 col-span-2"></span>
            <p class=" mt-5 col-start-2 col-span-2">
                -Suitable for babies from 3 months and weighing over 5 kg 
                <br>-Up to 8 hours pain and fever relief 
                <br>-Starts to get to work in 15 minutes to relieve fever 
                <br>-Free from artificial colours and flavours 
                <br>-Syringe for accurate and easy dosing 
                
                <br>Nurofen for Children Cold Pain & Fever Relief Suspension Strawberry 100ml is a liquid ibuprofen suspension that provides pain and fever relief for babies and children. 
                It provides fever relief that lasts for up to 8 hours and is available in both Strawberry and Orange flavours.
                
                <br>For over 30 years, Nurofen has helped to provide millions of people with pain relief. We are experienced in children’s fever and pain relief, and we are here to help.
                Nurofen for Children contains Ibuprofen which has anti-inflammatory properties and provides effective relief from fever and general pain.Our liquid formula does not need to be taken with food or water.
            </p>

            <h3 class="col-start-2 text-xl mt-5 mb-2"><strong>usage</strong></h3>
            <span class="border col-start-2 col-span-2"></span>
            <p class=" mt-5 col-start-2 col-span-2">
                -Suitable for babies from 3 months and weighing over 5 kg 
                <br>-Up to 8 hours pain and fever relief 
                <br>-Starts to get to work in 15 minutes to relieve fever 
                <br>-Free from artificial colours and flavours 
                <br>-Syringe for accurate and easy dosing 
                
                <br>Nurofen for Children Cold Pain & Fever Relief Suspension Strawberry 100ml is a liquid ibuprofen suspension that provides pain and fever relief for babies and children. 
                It provides fever relief that lasts for up to 8 hours and is available in both Strawberry and Orange flavours.
                
                <br>For over 30 years, Nurofen has helped to provide millions of people with pain relief. We are experienced in children’s fever and pain relief, and we are here to help.
                Nurofen for Children contains Ibuprofen which has anti-inflammatory properties and provides effective relief from fever and general pain.Our liquid formula does not need to be taken with food or water.
            </p>

            <h3 class="col-start-2 text-xl mt-5 mb-2"><strong>warnings</strong></h3>
            <span class="border col-start-2 col-span-2"></span>
            <p class=" mt-5 col-start-2 col-span-2">
                -Suitable for babies from 3 months and weighing over 5 kg 
                <br>-Up to 8 hours pain and fever relief 
                <br>-Starts to get to work in 15 minutes to relieve fever 
                <br>-Free from artificial colours and flavours 
                <br>-Syringe for accurate and easy dosing 
                
                <br>Nurofen for Children Cold Pain & Fever Relief Suspension Strawberry 100ml is a liquid ibuprofen suspension that provides pain and fever relief for babies and children. 
                It provides fever relief that lasts for up to 8 hours and is available in both Strawberry and Orange flavours.
                
                <br>For over 30 years, Nurofen has helped to provide millions of people with pain relief. We are experienced in children’s fever and pain relief, and we are here to help.
                Nurofen for Children contains Ibuprofen which has anti-inflammatory properties and provides effective relief from fever and general pain.Our liquid formula does not need to be taken with food or water.
            </p>
        </div>
    </div>
    <div class=" flex mx-auto justify-items-center justify-center mt-10">
        <router-link :to="'/buy'" type="button" class=" min-w-38 max-w-38 text-white bg-gradient-to-t from-red-400 via-pink-400 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">BUY NOW</router-link>
        <router-link :to="'/basket'" @click="addToBasket" type="button" class=" min-w-38 text-white bg-gradient-to-t from-red-400 via-pink-400 to-pink-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ADD TO BASKET</router-link>

    </div>
</template>
<script setup>
import json from '../assets/products.json'
import { useRoute } from 'vue-router';
import { onBeforeMount, onMounted, ref } from 'vue';

const route = useRoute();

var product = json.products.filter((product) => {
        return product.id == route.params.id;
});
onMounted(() => {
    
})

onBeforeMount(() => {
    const token = route.params.id
})

function addToBasket() {
    var storedItems = JSON.parse(localStorage.getItem('basket'));
    if (storedItems == null) {
        storedItems = [];
    }

    for (var i = 0; i < storedItems.length; i++) {
        if (storedItems[i][0].name == product[0].name) {
            storedItems[i][0].quantity += 1;
            localStorage.setItem('basket', JSON.stringify(storedItems));
            return;
        }
    }

    storedItems.push(product);
    localStorage.setItem('basket', JSON.stringify(storedItems));
    console.log(storedItems);
}

</script>