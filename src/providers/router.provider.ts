// setup my vue router :
import IRouterOption from "../interface/routerOption.interface";
import { createRouter , createWebHistory, Router } from 'vue-router';

import Home from "../pages/home.page.vue";




const routes:IRouterOption[] = [
  { path: '/', component:Home , name: 'home'}
];

const router:Router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;




