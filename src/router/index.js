//1.引入router相关的方法
import { createRouter, createWebHashHistory } from 'vue-router'
import AboutYou from '../components/AboutYou.vue'
import AboutMe from '../components/AboutMe.vue'
import Event from '../components/Event.vue'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import NotFound from '../components/notfound.vue'
// import News from '../components/news.vue'
const Home = () =>
    import ('../components/Home.vue')

const About = () =>
    import ('../components/About.vue')

const News = () =>
    import ('../components/news.vue')

const NotFound = () =>
    import ('../components/notfound.vue')


//2.创建映射关系
const routes = [{
            path: '/',
            redirect: '/home' //路由重定向
        }, {
            path: '/home',
            component: Home
        }, {
            path: '/about',
            component: About,
            children: [{
                path: '/aboutyou',
                /*嵌套路由不使用斜杠*/
                component: AboutYou,

            }, {
                path: '/aboutme',
                component: AboutMe,
            }]
        },
        {
            path: '/news/:nid',
            component: News
        },
        {
            path: '/event',
            component: Event
        },
        {
            path: '/:catchAll(.*)', //vue3必须使用带有自定义正则表达式的参数来定义
            component: NotFound
        },
    ]
    //3.创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes //键值名字一样，使用简写
    //routers: routers
});
//4.导入以便vue中使用
export default router;