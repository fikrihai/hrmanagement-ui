import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "./assets/main.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
//import vuetify from './plugins/vuetify'
library.add(faBars,faHouse,faFileCirclePlus,faPenToSquare)
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(vuetify);
app.mount("#app");
 