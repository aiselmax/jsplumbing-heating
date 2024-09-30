import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // For Material Design Icons
import '@mdi/font/css/materialdesignicons.css'; // Ensure the CSS is loade
// Components
import App from './App.vue'
import myDirectives from "./directives.js"
import { createHead } from "@unhead/vue";

const app = createApp(App);
const head = createHead();

for (let name in myDirectives) {
    // Creation of the directive name within the application
    app.directive(name, myDirectives[name]);
}

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

app.use(vuetify).use(head).mount('#app')
