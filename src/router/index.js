import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home.vue')
    },
    {
      path: '/stories',
      name: 'stories',
      component: () => import('@/pages/Stories.vue')
    },
    {
      path: '/services-and-prices',
      name: 'services-and-prices',
      component: () => import('@/pages/ServicesAndPrices.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('@/pages/Reviews.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/pages/Contacts.vue')
    },
    {
      path: '/portfolio/pregnant-photosession',
      name: 'pregnant-photosession',
      component: () => import('@/pages/Portfolio/PregnantPhotosession.vue')
    },
    {
      path: '/portfolio/wedding-photosession',
      name: 'wedding-photosession',
      component: () => import('@/pages/Portfolio/WeddingPhotosession.vue')
    },
    {
      path: '/portfolio/family-photosession',
      name: 'family-photosession',
      component: () => import('@/pages/Portfolio/FamilyPhotosession.vue')
    },
    {
      path: '/portfolio/child-photosession',
      name: 'child-photosession',
      component: () => import('@/pages/Portfolio/ChildPhotosession.vue')
    },
    {
      path: '/portfolio/individual-photosession',
      name: 'individual-photosession',
      component: () => import('@/pages/Portfolio/IndividualPhotosession.vue')
    },
    {
      path: '/portfolio/graduation-album',
      name: 'graduation-album',
      component: () => import('@/pages/Portfolio/GraduationAlbum.vue')
    },
    {
      path: '/new-year-photosession',
      name: 'new-year-photosession',
      component: () => import('@/pages/NewYearPhotosession.vue')
    }
  ]
})

export default router
