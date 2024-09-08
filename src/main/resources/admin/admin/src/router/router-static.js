import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import jieguogongshi from '@/views/modules/jieguogongshi/list'
    import gongyingshang from '@/views/modules/gongyingshang/list'
    import xinwenzixun from '@/views/modules/xinwenzixun/list'
    import discusszhaobiaoxiangmu from '@/views/modules/discusszhaobiaoxiangmu/list'
    import users from '@/views/modules/users/list'
    import zhaobiaoxiangmu from '@/views/modules/zhaobiaoxiangmu/list'
    import shichangjiandu from '@/views/modules/shichangjiandu/list'
    import zerendanwei from '@/views/modules/zerendanwei/list'
    import zhaobiaofenlei from '@/views/modules/zhaobiaofenlei/list'
    import bangzhuzhongxin from '@/views/modules/bangzhuzhongxin/list'
    import zhongbiaogonggao from '@/views/modules/zhongbiaogonggao/list'
    import zaixiantoubiao from '@/views/modules/zaixiantoubiao/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/jieguogongshi',
        name: '结果公示',
        component: jieguogongshi
      }
      ,{
	path: '/gongyingshang',
        name: '供应商',
        component: gongyingshang
      }
      ,{
	path: '/xinwenzixun',
        name: '新闻资讯',
        component: xinwenzixun
      }
      ,{
	path: '/discusszhaobiaoxiangmu',
        name: '招标项目评论',
        component: discusszhaobiaoxiangmu
      }
      ,{
	path: '/users',
        name: '管理员',
        component: users
      }
      ,{
	path: '/zhaobiaoxiangmu',
        name: '招标项目',
        component: zhaobiaoxiangmu
      }
      ,{
	path: '/shichangjiandu',
        name: '市场监督',
        component: shichangjiandu
      }
      ,{
	path: '/zerendanwei',
        name: '责任单位',
        component: zerendanwei
      }
      ,{
	path: '/zhaobiaofenlei',
        name: '招标分类',
        component: zhaobiaofenlei
      }
      ,{
	path: '/bangzhuzhongxin',
        name: '帮助中心',
        component: bangzhuzhongxin
      }
      ,{
	path: '/zhongbiaogonggao',
        name: '中标公告',
        component: zhongbiaogonggao
      }
      ,{
	path: '/zaixiantoubiao',
        name: '在线投标',
        component: zaixiantoubiao
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
