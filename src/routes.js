import Index from './views/Index.vue';
import Home from './views/Home.vue';
import SignUp from './views/SignUp.vue';
import SignIn from './views/SignIn.vue';
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
    },
    {
        path: '/signUp',
        name: 'signUp',
        component: SignUp
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: SignIn
    }
];