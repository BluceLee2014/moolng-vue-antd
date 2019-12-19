import Vue from 'vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// import App from './App.vue'
import Layout from './Layout'

Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
    router,
    render: h => h(Layout),
}).$mount('#app')
