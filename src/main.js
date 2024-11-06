import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; 
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router/router';
import setupToast from './plugins/toast';
import { formatDate } from '@/utils/dateUtils';
import '@mdi/font/css/materialdesignicons.css'; 
import '@fortawesome/fontawesome-free/css/all.css';

const vuetify = createVuetify({
    components,
    directives,
  }); 

const app = createApp(App);
console.log(formatDate(new Date()));

setupToast(app);
app.use(vuetify); 
app.use(router);
app.mount('#app');

// createApp(App).mount('#app')
