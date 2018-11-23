import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ISRManage from './views/ISRManage.vue';
import FileUploadProductMaster  from './views/FileUploadProductMaster';
import CategoryReport from './views/CategoryReport';
import FileUploadStoreWiseStock from './views/FileUploadStoreWiseStock';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/isrmanage',
      name: 'isrmanage',
      component: ISRManage,
    },
    {
      path:'/uploadproductmaster',
      name:'uploadproductmaster',
      component:FileUploadProductMaster
    },
    {
      path:'/categoryreport',
      name:'CategoryReport',
      component:CategoryReport
    },
    {
      path:'/uploadstorewisestock',
      name:'uploadstorewisestock',
      component:FileUploadStoreWiseStock
    }
  ],
});
