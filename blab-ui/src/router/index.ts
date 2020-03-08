import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';
import BlabSignIn from '@/components/BlabSignIn.vue';
import BlabDashboard from '@/components/BlabDashboard.vue';
import BlabSignUp from '@/components/BlabSignUp.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/sign-in',
    name: 'BlabSignIn',
    component: BlabSignIn
  },
  {
    path: '/sign-up',
    name: 'BlabSignUp',
    component: BlabSignUp
  },
  {
    path: '/',
    component: BlabDashboard,
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

const authRoutes = ['/sign-in', '/sign-up'];

router.beforeEach((to, from, next) => {
  if (authRoutes.find(x => x === to.fullPath)) {
    if (store.getters.isAuthenticated) {
      next('/');
    } else {
      next();
    }
  } else {
    if (store.getters.isAuthenticated) {
      next();
    } else {
      next('sign-in');
    }
  }
});

export default router;
