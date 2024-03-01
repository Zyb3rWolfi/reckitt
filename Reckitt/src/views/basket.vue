<template>
    <div class="relative">
        <img width="100%" class="" src="../../public/banner.png">
        <div class="absolute inset-0 flex items-center text-6xl justify-center text-white">
            <h1 class="">YOUR BASKET</h1>
        </div>
    </div>

    <div class=" grid mx-auto grid-cols-3 justify-center mt-12">

        <div class=" col-start-1 col-span-2">
            <div class="max-w-4xl p-6 bg-white border col-span-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <div class="grid grid-cols-3 gap-5">
                    <div class="col-start-1">
                        <img src="https://www.peakpharmacy.co.uk/uploads/images/products/large/16814797001668168929-14541700.jpg" alt="Mountain" class="h-12 sm:h-48 object-cover">
                    </div>
                    <div class="col-start-2">
                        <h1 class="text-xl font-medium text-gray-800 dark:text-white">Mountain</h1>
                        <p class="mt-2 text-gray-600 dark:text-gray-400">IN STOCK</p>
                    </div>
                    <div class=" col-start-3 justify-end justify-items-end">
                        <p class=" text-end">£3.30</p>
                    </div>
            
                </div>
            
            </div>

        </div>
        <div class=" col-start-3">
            <div class="max-w-4xl p-6 bg-white border col-span-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
                <p>Subtotal: £10.00</p>
                <button type="submit" class=" mt-12 pl-12 pr-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</button>
            </div>
        </div>
        
    </div>



</template>

<script setup> 


</script>