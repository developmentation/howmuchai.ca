import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import messages from './locales/messages.json';

// Create i18n instance
const i18n = createI18n({
  legacy: false,
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages
});

// Create and mount the Vue application
const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
