import Vue from 'vue'
import Router from 'vue-router'
import Movie from './views/Movie.vue'
import City from './views/City.vue'
import Now from './views/NowPlaying.vue'
import Soon from './views/ComingSoon.vue'
import Search from './views/Search.vue'
import CiList from './views/CiList.vue'
import Yingyuan from './views/Yingyuan.vue'
import Login from './views/login.vue'


Vue.use(Router)

export default new Router({

    routes: [{
            path: '/Movie',
            name: Movie,
            component: Movie
        },
        {
            path: '/',
            name: City,
            component: City
        },
        {
            path: '/Now',
            name: Now,
            component: Now
        },
        {
            path: '/Soon',
            name: Soon,
            component: Soon
        },
        {
            path: '/Search',
            name: Search,
            component: Search
        },
        {
            path: '/CiList',
            name: CiList,
            component: CiList
        },
        {
            path: '/Yingyuan',
            name: Yingyuan,
            component: Yingyuan
        },
        {
            path: '/Login',
            name: Login,
            component: Login
        }
    ]
})