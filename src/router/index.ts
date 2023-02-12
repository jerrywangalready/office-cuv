//引入路由对象
import {createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw} from 'vue-router'

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
    {
        name: 'index',
        path: '/',
        component: () => import('../views/Index.vue')
    }, {
        name: 'guide',
        path: '/guide',
        component: () => import('../views/Guide.vue'),
        redirect: to => {
            return {path: '/guide/intro'}
        },
        children: [
            {
                name: 'guideIntro',
                path: 'intro',
                component: () => import('../views/guide/Intro.vue')
            },
            {
                name: 'guideQuickStart',
                path: 'quick-start',
                component: () => import('../views/guide/QuickStart.vue')
            },
            {
                name: 'bestExperience',
                path: 'best-experience',
                component: () => import('../views/guide/BestExperience.vue')
            },
            {
                name: 'changeLog',
                path: 'change-log',
                component: () => import('../views/guide/ChangeLog.vue')
            }
        ]
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router
