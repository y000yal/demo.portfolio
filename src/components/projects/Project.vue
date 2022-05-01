<template>
  <div class = "r-content">
    <div class = "row" id="cp-project">
      <div
          class = "col-md-4 col-sm-6 col-xs-12"
          v-for = "(project,i) in projects"
          :key = "i"
      >
        <v-card
            class = "mx-auto"
            max-width = "344"
            elevation = "5"
            @click.stop = "openModal(project)"
        >
          <div :style = "`background:${project.color};color:${project.text_color}`">
            <div class = "outer-image pa-4">
              <v-img
                  v-if = "project.image"
                  :src = "require('../../assets/images/'+project.image)"
                  height = "100px"
                  style = "flex-basis: 125px"
                  contain
                  class = "shrink ma-2"
              ></v-img>
            </div>
            <v-card-title>
              {{ project.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ project.title }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <a
                  target = "_blank"
                  :href = "project.link"
              >

                <v-icon color="secondary" small>
                  mdi-link
                </v-icon>

              </a>
            </v-card-actions>
          </div>
        </v-card>

      </div>
      <v-dialog
          v-model = "dialog"
          transition = "dialog-bottom-transition"
          fullscreen

      >
        <v-card
            style = "border-radius: 0;padding: 10px!important;"
        >
          <div style = "display: flex">
            <v-btn
                icon
                @click = "dialog = false"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn
                class = "ml-auto"
                icon
                @click = "dialog = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class = "outer-image pa-4">
            <v-img
                v-if = "currentProject.image"
                :src = "require('../../assets/images/'+currentProject.image)"
                height = "100px"
                style = "flex-basis: 125px"
                contain
                class = "shrink ma-2"
            ></v-img>
          </div>
          <v-card-title class = "text-h5">
            {{ currentProject.title }}
          </v-card-title>
          <v-card-title class = "text-h5">Stacks</v-card-title>
          <div class = "pa-4">
            <v-btn
                small
                :color = "currentProject.color"
                dark
                v-for = "(tag,t) in currentProject.tags"
                :key = "t"
                class = "mr-2"
            >
              {{ tag }}
            </v-btn>
          </div>

          <v-card-text>
            {{ currentProject.description }}
          </v-card-text>
          <div v-if = "currentProject.bullets">
            <v-card-title class = "text-h5">
              Bullets
            </v-card-title>
            <v-card-text>
              <v-list-item
                  v-for = "b in currentProject.bullets"
              >
                <v-list-item-content>
                  <v-list-item-subtitle>{{ b }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>
          </div>
          <v-divider></v-divider>
          <div class = "pa-4" v-if = "currentProject.services && currentProject.services.length >= 1">
            <v-card-title class = "text-h5">
              Services I built for {{ currentProject.name }}
            </v-card-title>
            <v-expansion-panels popout>
              <v-expansion-panel
                  v-for = "(s,key) in currentProject.services"
                  :key = "key"
              >
                <v-expansion-panel-header>{{ s.name }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-card
                      style = "border-radius: 0;padding: 10px!important;"
                  >
                    <v-card-title class = "text-h5">

                      {{ s.title }}
                      <v-spacer></v-spacer>
                      <a
                          v-if = "s.link"
                          target = "_blank"
                          :href = "s.link"
                      >
                        <v-icon>
                          mdi-link
                        </v-icon>
                      </a>
                    </v-card-title>
                    <v-card-title class = "text-h5">Stacks</v-card-title>
                    <div class = "pa-4">
                      <v-btn
                          small
                          color = "warning"
                          dark
                          v-for = "(tag,t) in s.tags"
                          :key = "t"
                          class = "mr-2"
                      >
                        {{ tag }}
                      </v-btn>
                    </div>
                    <div v-if = "s.bullets">
                      <v-card-title class = "text-h5">
                        Bullets
                      </v-card-title>
                      <v-card-text>
                        <v-list-item
                            v-for = "bullet in s.bullets"
                        >
                          <v-list-item-content>
                            <v-list-item-subtitle>{{ bullet }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card-text>
                    </div>
                    <v-divider></v-divider>
                    <v-card-text>
                      {{ s.description }}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>

</template>

<script>
import projects from "./projects.json"

export default {
  name: "Project",
  data() {
    return {
      projects: projects,
      dialog: false,
      currentProject: {}
    }
  },
  methods: {
    openModal(project) {
      this.dialog = true
      this.currentProject = project
    }
  }
}
</script>

<style lang = "scss" scoped>
/* define primary colors */
$primary_1: #A2B9BC;
$primary_2: #B2AD7F;

/* use the variables */
.main-header {
  background-color: $primary_1; // here you can put an inline comment
}

@media only screen and (max-width: 1000px) {
  .r-content {
    margin-left: 0 !important;
  }
}

</style>