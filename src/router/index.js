import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/Views/Login/LoginPage.vue'),
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/Views/Menu/Menu.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '/lista',
                name: 'lista',
                component: () => import('@/Views/Lista/ListaPage.vue'),
            },
            {
                path: '/descricao/:id',
                name: 'descricao',
                component: () => import('@/Views/Descricao/DescricaoPage.vue'),
            },
            {
                path: '/cadastro',
                name: 'cadastro',
                component: () => import('@/Views/Cadastro/Cadastro.vue'),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;