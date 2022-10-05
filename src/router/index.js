import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/AppHome'
import AboutApp from '../views/AboutApp'

const routes = [
    {
        path: '/',
        name: 'AppHome',
        component: AppHome,
    },
    {
        path: '/about',
        name: 'AboutApp',
        component: AboutApp,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router