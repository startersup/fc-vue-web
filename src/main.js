import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import App from './App.vue';
import home from './components/home.vue';
import tour from './components/tour.vue';
import contact from './components/contact.vue';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes =[
  { path :'/tour', component : tour },
  { path :'/contact', component : contact },
  { path :'/', component : home }
  
];

const router =new VueRouter({
  routes,
  mode : 'history'
});
new Vue({

  router,
  render: h => h(App),
}).$mount('#app')
