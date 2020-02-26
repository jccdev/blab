import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

const authRoutes = [ '/login' ];

router.beforeEach((to, from, next) => {
  if (authRoutes.find(x => x === to.fullPath)) {
    if(store.getters.isAuthenticated) {
      next('/')
    } else {
      next();
    }
  } else {
    if(store.getters.isAuthenticated) {
      next()
    } else {
      next('login');
    }
  }
});

export default router;
