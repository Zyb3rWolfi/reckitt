import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue"
import productsView from '../views/products-vew.vue';
import strepsils from '../components/strepsils.vue'

const routes = [
    {
        path: '/',
        name: "home",
        component: home,
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
        
    ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router