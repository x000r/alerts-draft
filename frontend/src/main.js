import Vue from 'vue'
import App from './App.vue'
import router from './routes'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App),
  components: { App }
}).$mount('#app')
