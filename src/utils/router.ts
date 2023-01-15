import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFound from "c/notfound.component.vue"

const routes: RouteRecordRaw[] = [
    { path: '/home', component: { template: "wqeqwewq" } },
    { path: '/:pathMatch(.*)', component: NotFound }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})