import Vue from 'vue'
import Router from 'vue-router'
import VueCookie from 'vue-cookie'
Vue.use(Router)
Vue.use(VueCookie)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../pages/FullPage/Login'], resolve)
    },
    {
      path: '/',
      redirect: {name: 'purchase'},
      component: resolve => require(['../pages/DashBoardPage/DashBoardPage'], resolve),
      children: [
        {
          path: 'purchase',
          name: 'purchase',
          // meta: { requiresAuth: true },
          component: resolve => require(['../pages/DashBoardPage/content/PurchaseManage/PurchaseManage'], resolve)
        },
        {
          path: 'fitting',
          name: 'fitting',
          // meta: { requiresAuth: true },
          component: resolve => require(['../pages/DashBoardPage/content/FittingManage/FittingManage'], resolve)
        },
        {
          path: 'userData',
          name: 'userData',
          // meta: { requiresAuth: true },
          component: resolve => require(['../pages/DashBoardPage/content/UserData/UserData'], resolve)
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 通过meta字段来判断，需要登录状态的页面需要在登录之后才能进，无需登录状态的页面可直接进入。
	if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Vue.cookie.get('login')) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
	} else {
		next()
	}
})
export default router
