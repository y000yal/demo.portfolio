<template>
  <v-container>
    <div
        class = "row"
        v-for="(route,i) in routes"
        :ref= "route.name"
        :key="i"
    >
      <div class="col-12 text-center">
        <h1>{{route.name}}</h1>
      </div>
      <div class = "col-12">
        <component :is="route.component_name" :block="route" :key="i"></component>
      </div>
    </div>

    <!--    <router-view>-->
    <!--    </router-view>-->

  </v-container>
</template>

<script>
import routes from './route.json'
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Project from "@/components/projects/Project";
import Stack from "@/components/stacks/Stack";
import About from "@/About/About";
export default {
  name: "MainBody",
  components: {About, Education, Experience, Project, Stack},
  data() {
    return {
      routes:routes
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>