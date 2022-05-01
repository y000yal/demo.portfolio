import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import {colors} from "vuetify/lib";
Vue.use(Vuetify);

export default new Vuetify({
   customVariables: ['@/assets/scss/variables.scss'],
   theme: {
      dark: false,
      options: {
         customProperties: true,
      },
      themes: {
         light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            accent: '#E07A5F',
            error: '#b71c1c',
            background:'#eaeaea',
            lighten1: '#53917E'
         },
      },
   },
});
