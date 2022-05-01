<template>
  <v-card class = "pa-10">
    <div class = "row text-center"
         v-for = "(stack,i) in stacks"
         :key = "i">
      <div class = "col-12">
        <v-card-title >
          {{ i.toUpperCase() }} :
        </v-card-title>
      </div>
      <div class = "col text-center"
           v-for = "(my,i) in stack"
           :key = "i"
      >
        <v-tooltip top color = "success">
          <template v-slot:activator = "{ on, attrs }">
            <v-img
                v-if = "my.image"
                :src = "require('../../assets/images/'+my.image)"
                height = "50px"
                min-width = "50px"
                contain
                max-height = "50px"
                v-bind = "attrs"
                v-on = "on"
            ></v-img>
          </template>
          <span>{{ my.name }}: {{ my.percent }}%</span>
        </v-tooltip>
        <v-progress-linear
            dark
            :value = "my.percent"
            striped
        >

        </v-progress-linear>
      </div>
    </div>
  </v-card>
</template>

<script>
import stacks from './stack.json'

export default {
  name: "Stack",
  data() {
    return {
      "stacks": stacks
    }
  }
}
</script>

<style scoped>

</style>