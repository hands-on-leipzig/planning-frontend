import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import {Button} from "primevue"
import EventOverview from "./components/EventOverview.vue"
import {createRouter, createWebHistory} from 'vue-router'


const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})

const routes = [
    {path: '/', component: EventOverview},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)
app.component('Button', Button)
app.mount('#app')