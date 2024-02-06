import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
// admin
import AdminLogin from '@/views/Oc2PlusAdmin/LoginView.vue'
import AdminDashboard from '@/views/Oc2PlusAdmin/DashboardView.vue'
import AdminUser from '@/views/Oc2PlusAdmin/user/UserView.vue'
import AdminProfileList from '@/views/Oc2PlusAdmin/profile/ProfileList.vue'
import AdminProfileView from '@/views/Oc2PlusAdmin/profile/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/ProfileList.vue'),
        meta: {}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoingRegister.vue'),
        meta: {}
    },
    // admin
    {
        path: '/admin/login',
        name: 'admin-login',
        component: AdminLogin
    },
    {
        path: '/admin/dashboard',
        name: 'admin-dashboard',
        component: AdminDashboard
    },
    {
        path: '/admin/user',
        name: 'admin-user',
        component: AdminUser
    },
    {
        path: '/admin/profile',
        name: 'admin-profile',
        component: AdminProfileList
    },
    {
        path: '/admin/profile/create',
        name: 'admin-profile-create',
        component: AdminProfileView
    },
    {
        path: '/admin/profile/edit/:id',
        name: 'admin-profile-update',
        component: AdminProfileView
    },
    // {
    //     path: '/admin/dashboard',
    //     name: 'admin-dashboard',
    //     component: AdminDashboard
    // }
    ]
})

export default router