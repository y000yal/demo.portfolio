<template>
  <v-app>
    <v-container class = "py-1 fill-height"  style = " position: sticky;top: 0;z-index: 1;">
      <v-avatar
          class = "mr-10"
          size = "40"
      >
        <v-icon
            color = "dark"
            @click = "drawer = !drawer"
        >
          mdi-menu
        </v-icon>
      </v-avatar>

      <div style = "margin-left: auto;">

        <v-icon
            color = "dark"
            @click = "switchTheme"
        >
          mdi-theme-light-dark
        </v-icon>
      </div>
    </v-container>

    <v-navigation-drawer
        v-model = "drawer"
        absolute
        temporary
        class = "sideBar"
    >
      <v-list
          nav
      >
        <v-list-item-group
            v-model = "selectedItem"
            color = "primary"
        >
          <v-list-item
              link
              v-for = "(list,i) in lists"
              :key = "i"
              @click = "goto(list.name)"
          >
            <v-list-item-icon>
              <v-img :src = "require('../src/assets/images/'+list.image)" max-width = "40"></v-img>
            </v-list-item-icon>
            <v-list-item-content>

              <v-list-item-title>
                {{ list.component_name }}
              </v-list-item-title>

            </v-list-item-content>

          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class = "background">
      <router-view ref = "comp"/>
    </v-main>
  </v-app>
</template>

<script>
import routes from './components/route.json'

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    lists: routes,
    group: null,
    theme: "off",
    selectedItem: 0,
  }),
  computed: {},
  methods: {
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.theme = this.$vuetify.theme.dark ? 'on' : 'off'
    },
    isRouteActive(item) {
      return item.to.path === this.$route.name;
    },
    goto(refName) {
      var element = this.$refs.comp.$children[0].$refs[refName];
      var top = element[0].offsetTop;
      $('html, body').animate({
        scrollTop: top
      }, 1000);

    }
  }
};
</script>
<style>
@import "assets/css/style.css";

.sideBar a {
  text-decoration: none;
}

</style>