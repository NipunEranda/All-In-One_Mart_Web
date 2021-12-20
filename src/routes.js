import Index from './views/Index.vue';
import Home from './views/Home.vue';
export const  routes = [
    {
        path: '',
        name: 'index',
        component: Index
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];