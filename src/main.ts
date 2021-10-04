import VueSocketIOExt from "vue-socket.io-extended"
import { io } from "socket.io-client"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

const socket = io("http://localhost:3000", { transports: ["websocket"] })

createApp(App)
  .use(store)
  .use(router)
  .use(VueSocketIOExt, socket)
  .mount("#app")
