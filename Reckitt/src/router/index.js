import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import productsView from '../views/products-vew.vue';
import strepsils from '../components/strepsils.vue'
import optrex from '../components/optrex.vue'
import nurofen from '../components/nurofen.vue'
import lemsip from '../components/lemsip.vue'
import gaviscon from '../components/gaviscon.vue'
import bonjela from '../components/bonjela.vue'
import productPage from '../views/product-page.vue'


const routes = [
    {
        path: '/',
        name: "home",
        component: home,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: productPage
    },
    {
        path: '/products/',
        name: "products",
        component: productsView,
        children:[
        {
            path: 'strepsils',
            component: strepsils,
        },
        {
            path: 'optrex',
            component: optrex,
        },
        {
            path: 'nurofen',
            component: nurofen,
        },
        {
            path: 'lemsip',
            component: lemsip,
        },
        {
            path: 'gaviscon',
            component: gaviscon,
        },
        {
            path: 'bonjela',
            component: bonjela,
        },
        
    ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router