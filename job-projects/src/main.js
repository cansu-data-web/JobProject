import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css';
//import VueRouter from 'vue-router'
//import { routes } from "./routes";

//Vue.use(VueRouter);


Vue.config.productionTip = false
Vue.use(VueToast);

// const router = new VueRouter ({
//   routes,
//   mode : 'history' //hash : Default..
// });


new Vue({
 // router,
  render: h => h(App), 
}).$mount('#app')
