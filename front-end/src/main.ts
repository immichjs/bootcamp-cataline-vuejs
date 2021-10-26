import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'

import ButtonStyled from '@/components/ButtonStyled.vue'
import highlight from '@/directives/highlight'

const app = createApp(App)

app.directive('highlight', highlight)
app.component('ButtonStyled', ButtonStyled)

app.mount('#app')
