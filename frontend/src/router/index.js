import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/surat',
        name: 'surat.index',
        component: () => import("../views/index.vue")
    },
    {
        path: '/surat/create',
        name: 'surat.create',
        component: () => import("../views/create.vue")
    },
    {
        path: '/surat/edit/:id',
        name: 'surat.edit',
        component: () => import("../views/edit.vue")
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router