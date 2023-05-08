import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/Views/Menu/Menu.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '/cardapio',
                name: 'cardapio',
                component: () => import('@/Views/Cardapio/CardapioPage.vue'),
            },
            {
                path: '/lanche',
                name: 'lanche',
                component: () => import('@/Views/Cardapio/Pratos/LanchePage.vue')
            },
            {
                path: '/refeicao',
                name: 'refeicao',
                component: () => import('@/Views/Cardapio/Pratos/RefeicaoPage.vue')
            },
            {
                path: '/sobremesa',
                name: 'sobremesa',
                component: () => import('@/Views/Cardapio/Pratos/SobremesaPage.vue')
            },
            {
                path: '/bebida',
                name: 'bebida',
                component: () => import('@/Views/Cardapio/Pratos/BebidaPage.vue')
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;