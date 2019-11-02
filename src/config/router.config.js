import {
    FormLayout,
    TableLayout,
    BasicLayout
} from '@/layouts/index.js'

import Forbidden from '../components/403.vue'
import NotFound from '../components/404.vue'

export const constantRouterMap = [

    {
        path: '/',
        meta: { authority: ['user', 'admin'] },
        redirect: '/form',
        component: BasicLayout,
        children: [
            {
                path: '/form',
                component: FormLayout,
                name: '表单',
                redirect: '/form/formBasic',
                hidden: true,
                children: [{
                    path: 'formBasic',
                    name: 'formBasic',
                    meta: { 'ZH': '基础表单' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/form/formBasic')
                }, {
                    path: 'formCustom',
                    name: 'formCustom',
                    meta: { 'ZH': '自定义表单' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/form/formCustom')
                }, , {
                    path: 'formPreventDuplication',
                    name: 'formPreventDuplication',
                    meta: { 'ZH': '防止重复提交' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/form/formPreventDuplication')
                }, {
                    path: 'formGroup',
                    name: 'formGroup',
                    meta: { 'ZH': '分组表单' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/form/formGroup')
                }, {
                    path: 'formSubform',
                    name: 'formSubform',
                    meta: { 'ZH': '子表单' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/form/formSubform')
                }]
            },
            {
                path: '/table',
                name: '表格',
                component: TableLayout,
                children: [{
                    path: 'tableBasic.vue',
                    name: 'tableBasic.vue',
                    meta: { 'ZH': '基础表格' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableBasic.vue')
                }, {
                    path: 'tableConfirm',
                    name: 'tableConfirm',
                    meta: { 'ZH': '验证' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableConfirm')
                }, {
                    path: 'tableCustomConfirm.vue',
                    name: 'tableCustomConfirm.vue',
                    meta: { 'ZH': '自定义验证' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableCustomConfirm.vue')
                }, {
                    path: 'tableRich',
                    name: 'tableRich',
                    meta: { 'ZH': '丰富的表格' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableRich')
                }, {
                    path: 'tableIcon',
                    name: 'tableIcon',
                    meta: { 'ZH': '图标菜单' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableIcon')
                }, {
                    path: 'tablePage',
                    name: 'tablePage',
                    meta: { 'ZH': '分页' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tablePage')
                }, {
                    path: 'tablePageCustom',
                    name: 'tablePageCustom',
                    meta: { 'ZH': '自定义分页' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tablePageCustom')
                }, {
                    path: 'tableConfirm',
                    name: 'tableConfirm',
                    meta: { 'ZH': '验证' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableConfirm')
                }, {
                    path: 'tableSort',
                    name: 'tableSort',
                    meta: { 'ZH': '排序' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableSort')
                }, {
                    path: 'tablePreventDuplicate',
                    name: 'tablePreventDuplicate',
                    meta: { 'ZH': '防重提交' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tablePreventDuplicate')
                }, {
                    path: 'tableMutipleSelect',
                    name: 'tableMutipleSelect',
                    meta: { 'ZH': '多选' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableMutipleSelect')
                }, {
                    path: 'tableInForm',
                    name: 'tableInForm',
                    meta: { 'ZH': '表格中的表单' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableInForm')
                }, {
                    path: 'tableDrag',
                    name: 'tableDrag',
                    meta: { 'ZH': '拖拽' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableDrag')
                }, {
                    path: 'tableSearch',
                    name: 'tableSearch',
                    meta: { 'ZH': '搜索' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableSearch')
                }, {
                    path: 'tableExcept',
                    name: 'tableExcept',
                    meta: { 'ZH': '导出' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableExcept')
                }, {
                    path: 'tableLineSwitch',
                    name: 'tableLineSwitch',
                    meta: { 'ZH': '行开关' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableLineSwitch')
                }, {
                    path: 'tableFixed',
                    name: 'tableFixed',
                    meta: { 'ZH': '行冻结' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableFixed')
                }, {
                    path: 'tableCustomColumn',
                    name: 'tableCustomColumn',
                    meta: { 'ZH': '自定义列' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableCustomColumn')
                }, {
                    path: 'tableCustomMenu',
                    name: 'tableCustomMenu',
                    meta: { 'ZH': '自定义菜单' },
                    component: () => import(/* webpackChunkName: "user" */ '@/components/table/tableCustomMenu')
                }]
            }, {
                path: '/userSee',
                name: '用户看得到',
                meta: { authority: ['user'] },
                component: () => import(/* webpackChunkName: "user" */ '@/components/form')
            }, {
                path: '/adminSee',
                name: '管理员看得到',
                meta: { authority: ['admin'] },
                component: () => import(/* webpackChunkName: "user" */ '@/components/form')
            }

        ]
    }, {
        path: '/403',
        name: '403',
        hideInMenu: true,
        component: Forbidden
    },
    {
        path: '*',
        name: '404',
        redirect: '/'
    }
]