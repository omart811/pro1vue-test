import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'http://www.wwtliu.com';
Axios.defaults.headers.post['Content-Type'] = 'application/x-w-www-form-urlencoded;;charset=utf-8'

Vue.config.productionTip = false
//请求拦截器
Axios.interceptors.request.use(function(config){
    if(config.method == "post"){
      config.data = qs.stringify(config.data)
    }
    return config;
}, function(error){
  //对请求错误做些什么
  return Promise.reject(error);
});

Axios.interceptors.response.use(function(response){
  return response; 
},function(error){
  return Promise.reject(erro);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
