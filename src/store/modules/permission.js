import { constantRouterMap } from '@/config/router.config.js';

function filterAsyncRouter(routerMap, roles) {
    const accessedRouters = routerMap.filter(route => {
        if (hasPermission(roles.permissionList, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const { roles } = data
                // const accessedRouters = filterAsyncRouter(constantRouterMap, roles)
                console.log(data);
                // commit('SET_ROUTERS', data)
                resolve()
            })
        }
    }
}

export default permission;