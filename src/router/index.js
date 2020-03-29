import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
 
  {
    path: '/',
    name: 'Subway - Order Online',
 
    component: function () {
      return import('../views/Make-Order.vue')
    }
  },
  {
    path: '/confirm-order',
    name: 'Subway - Confirm Order',
 
    component: function () {
      return import('../views/Confirm-Order.vue')
    }
  },
  {
    path: '/thank-you',
    name: 'Subway - Order Success!',
 
    component: function () {
      return import('../views/Thank-You.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

router.beforeEach((to, from, next) => {
  let title = to.name;
  const keys = Object.keys(to.params);
  if (keys.length) {
    title = `${to.name}: ${to.params[keys[0]]}`;
    if (to.params[keys[1]]) {
      title += ` ${to.params[keys[1]]}`;
    }
  }
  document.title = title;
  next();
});
