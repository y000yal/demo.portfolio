<template>
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12"
           v-for = "(experience,i) in experiences"
           :key = "i"
      >
        <v-card
            rounded="lg"
            outlined
        >
          <v-list-item three-line>
            <a :href = "experience.website" target = "_blank">
              <v-list-item-avatar
                  tile
                  size = "80"
              >
                <v-img :src = "experience.logo">
                </v-img>
              </v-list-item-avatar>
            </a>
            <v-list-item-content>
              <div class = "text-overline mb-4">
                {{ experience.name }}
              </div>
              <v-list-item-title class = "text-h5 mb-1">
                {{ experience.position }}
              </v-list-item-title>
              <v-card-text> {{ experience.description }}</v-card-text>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-list-item class = "grow">
              <v-list-item-content>
                <v-list-item>
                  <v-icon class = "mr-1">
                    mdi-calendar
                  </v-icon>
                 {{new Date(experience.start_date).toLocaleDateString("en-US",{ year: 'numeric', month: 'short', day: 'numeric' })}}
                </v-list-item>
              </v-list-item-content>
              -
              <v-list-item-content v-if="!experience.currently_working">
                <v-list-item>
                  <v-icon class = "mr-1">
                    mdi-calendar
                  </v-icon>
                  {{new Date(experience.end_date).toLocaleDateString("en-US",{ year: 'numeric', month: 'short', day: 'numeric' })}}
                </v-list-item>
              </v-list-item-content>
              <v-list-item-content v-else>
                <v-list-item>
                  <v-icon class = "mr-1">
                    mdi-calendar
                  </v-icon>
                  Currently Working
                </v-list-item>
              </v-list-item-content>
              <v-row
                  align = "center"
                  justify = "end"
              >
                Job type : {{experience.job_type}}
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </div>
    </div>
</template>

<script>
import experiences from './experience.json'

export default {
  name: "Experience",
  data() {
    return {
      experiences: experiences
    }
  }
}
</script>

<style scoped>
#experience-box {
  padding: 20px;
}

</style>