import Index from './views/Index.vue';
import Home from './views/Home.vue';
import SignUp from './views/UserManagement/SignUp.vue';
import SignIn from './views/UserManagement/SignIn.vue';
import ForgotPassword from './views/UserManagement/ForgotPassword.vue';
import Contact from './views/Contact.vue';
import About from './views/About.vue';
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
    },{
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: ForgotPassword
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];