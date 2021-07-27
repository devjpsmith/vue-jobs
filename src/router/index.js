import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import('../views/jobs/Jobs')
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import('../views/jobs/JobDetails'),
    props: true
  },
  {
    path: '/all-jobs',
    name: 'Jobs',
    component: () => import('../views/jobs/Jobs')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
