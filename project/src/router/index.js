//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
import Content from '../pages/Content.vue'
import Ancient from '../pages/Ancient.vue'
import Detail from '../pages/Detail.vue'
import Log from '../pages/Log.vue'
import Search from '../pages/Search.vue'
import Cars from '../pages/Cars.vue'
//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/content'
        },
        {
            path:'/content',
            component:Content,
            meta:{
                showCopyright:true
            }
        },
        {
            path:'/ancient',
            component:Ancient,
        },
        {
            path:'/detail',
            component:Detail,
            props({query:{id,url,title,price}}){ //配置Detail组件可以接收query参数
                return {id:id,url:url,title:title,price:price}
            },
        },
        {
            path:'/search',
            component:Search,
        },
        {
            path:'/cars',
            component:Cars,
        },
        {
            path:'/log',
            component:Log
        },
    ]
})