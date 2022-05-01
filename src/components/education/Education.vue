<template>
  <v-timeline
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
      :reverse="reverse"
  >
    <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
    >
      <v-card
          :color="item.color"
          class="mx-auto"
          max-width="400"
          dark
      >
          <v-img
              class="white--text align-end"
              height="200px"
              :src="require('../../assets/images/'+item.image)"
          >
            <v-card-title>{{item.name}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
          {{'From : '+item.start_date+' To: '+ item.end_date}}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div> {{ item.location }}</div>

            <div>{{item.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="orange"
                text
            >
              website
            </v-btn>

            <v-btn
                color="orange"
                text
            >
              Map
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import education from './education.json'
export default {
  name: "Education",
  data: () => ({
    items: education,
    reverse: true,
  }),
}
</script>

<style scoped>
@media only screen and (max-width: 1000px) {
  .r-content{
    margin-left: 150px;
  }
}
</style>