// vue view -> router -> services(->api) -> store -> view 
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import DataVVue3 from '@kjgl77/datav-vue3'


import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import Button from 'primevue/button';
import '/node_modules/primeflex/primeflex.css'
import Menu from 'primevue/menu';
import 'primeicons/primeicons.css'
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext'
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional
import Editor from 'primevue/editor';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toolbar from 'primevue/toolbar';
import FileUpload from 'primevue/fileupload';
import Chart from 'primevue/chart';



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.use(DataVVue3)

app.component("Button", Button)
app.component("Menu", Menu)
app.component("Carousel", Carousel)
app.component("Tag", Tag)
app.component("InputText", InputText)
app.component("DataView", DataView)
app.component("DataViewLayoutOptions", DataViewLayoutOptions)
app.component("Editor", Editor)
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("Toolbar", Toolbar)
app.component("FileUpload", FileUpload)
app.component("Chart", Chart)

app.mount('#app')
