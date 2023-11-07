import { createApp } from 'vue'
import router from './router'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import './assets/bower_components/bootstrap/dist/css/bootstrap.min.css'
import './assets/bower_components/font-awesome/css/font-awesome.min.css'
import './assets/bower_components/Ionicons/css/ionicons.min.css'
import './assets/dist/css/AdminLTE.min.css'
import './assets/dist/css/skins/_all-skins.min.css'

const app = createApp(App);


app.use(router)
app.mount('#app')