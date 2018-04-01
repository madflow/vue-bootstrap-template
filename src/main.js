import bootstrapCss from './bootstrap.scss';

import Vue from 'vue';
import App from './App';
import router from './routes';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
