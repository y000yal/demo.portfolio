import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Experience from "@/components/experience/Experience";
import Education from "@/components/education/Education";
import Project from "@/components/projects/Project";
import Stack from "@/components/stacks/Stack.vue";
import About from "@/About/About";

Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
         {
            path: 'experience',
            name: 'experience',
            component: Experience,
         },
         {
            path: 'education',
            name: 'education',
            component: Education,
         },
         {
            path: 'projects',
            name: 'projects',
            component: Project,
         },
         {
            path: 'stack',
            name: 'stack',
            component: Stack,
         },
         {
            path: 'about',
            name: 'about',
            component: About,
         },
      ]
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})

export default router
