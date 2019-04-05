import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import components from './components'
import theme from './theme'
import directives from './directives'

Vue.use(Vuetify, {
  components,
  theme,
  directives,
  options: {
    customProperties: true
  }
})
