// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#00000',
        secondary: '#00000',
        accent: '#00000',
      },
      dark: {
        primary: '#00000',
        secondary: '#00000',
        accent: '#00000',
      },
    },
  },
})
