import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import routes from './routes';
import Main from './Main.vue';

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:9000';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Main/>',
  components: { Main },
  router,
});
