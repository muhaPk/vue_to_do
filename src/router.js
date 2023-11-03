import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomeView.vue';
import About from './views/AboutView.vue';
import Notes from './views/NotesView.vue';
import Search from './views/SearchView.vue';
import Albums from './views/AlbumsView.vue';
import Album from './views/AlbumView.vue';
import Todo from './views/TodoView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/notes',
        name: 'Notes',
        component: Notes,
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
    },
    {
        path: '/albums',
        name: 'Albums',
        component: Albums,
    },
    {
        path: '/album/:id',
        name: 'Album',
        component: Album,
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo,
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
