<template>
  <v-navigation-drawer
      v-model = "drawer"
      absolute
      temporary
  >
    <v-avatar
        class = "mr-10"
        size = "40"
    >
      <v-icon
          color = "dark"
          @click = ""
      >
        mdi-menu
      </v-icon>
    </v-avatar>
    <v-list
        nav
    >
      <v-list-item-group
          v-model = "selectedItem"
          color = "primary"
      >

        <router-link
            :to = "list.to"
            v-for = "(list,i) in lists"
            :key = "i"
        >
          <v-list-item
              link
          >
            <v-list-item-icon>
              <v-img :src = "require('../../../src/assets/images/'+list.image)" max-width = "40"></v-img>
            </v-list-item-icon>
            <v-list-item-content>

              <v-list-item-title>
                {{ list.name }}
              </v-list-item-title>

            </v-list-item-content>

          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '../route.json'

export default {
  name: "Sidebar.vue",
  props: {
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      lists: routes,
      group: null,
      selectedItem: 1,
    }
  },
  methods: {
    isRouteActive(item) {
      return item.to.path === this.$route.name;
    },
  },
  updated() {
    console.log(this.drawer)
  }
}
</script>

<style scoped>

</style>