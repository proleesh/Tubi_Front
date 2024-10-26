import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import UploadVideo from '../components/UploadVideo.vue';
import VideoList from '../components/VideoList.vue';
import VideoDetail from '../components/VideoDetail.vue';
import Register from "../components/Register.vue";

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    {
        path: '/upload-video', name: 'UploadVideo', component: UploadVideo,
        meta: { requiresAuth: true }
    },
    { path: '/videos', name: 'VideoList', component: VideoList },
    { path: '/videos/:id', name: 'VideoDetail', component: VideoDetail, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        alert('Please login first');
        next('/login');
    } else {
        next();
    }
})
export default router