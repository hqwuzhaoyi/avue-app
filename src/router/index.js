import Vue from 'vue'
import VueRouter from 'vue-router';
import { constantRouterMap } from '@/config/router.config'
// import findLast from 'loadash/findLast'
import { check, isLogin } from '../utils/auth'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'



Vue.use(VueRouter)

// const router = new VueRouter({
//     routes: [
//         { path: '/', component: App }
//     ]
// })

// export default router;

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
    const record = findLast(to.matched, record => record.meta.authority)
    if (record && !check(record.meta.authority)) {
        if (!isLogin() && to.path !== '/user/login') {
            next({
                path: '/user/login'
            })
        } else if (to.path !== '/403') {
            next({
                path: '/403'
            })
        }
        NProgress.start()
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router;