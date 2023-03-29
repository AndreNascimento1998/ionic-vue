import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/Views/Login/LoginPage.vue'),
    },
    {
        path: '/lista',
        name: 'lista',
        component: () => import('@/Views/Lista/ListaPage.vue'),
    },
    {
        path: '/descricao/:id',
        name: 'descricao',
        component: () => import('@/Views/Descricao/DescricaoPage.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
export default router;