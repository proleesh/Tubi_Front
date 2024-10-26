import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import UploadVideo from '../components/UploadVideo.vue';
import VideoList from '../components/VideoList.vue';
import VideoDetail from '../components/VideoDetail.vue';
import Register from "../components/Register.vue";
import Profile from "../components/Profile.vue";
import Chat from "../components/Chat.vue";

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
    { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/chat', name: 'Chat', component: Chat }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        alert('사용할려면 먼저 로그인 하세요!!!');
        next('/login');
    } else {
        next();
    }
})
export default router