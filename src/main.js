import "bootstrap/dist/css/bootstrap.css"



import { createApp } from 'vue'
import router from "@/router/router";
import App from './App.vue'
import "bootstrap/dist/js/bootstrap.js"

  

const app = createApp(App);
app.use(router);
app.mount('#app');


  