import { createRouter , createWebHashHistory } from "vue-router";
import base from "./components/base.vue";
import image from "./components/image.vue";
import main from "./components/main.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: "/base", component: image},
        {path: "/image", component: base},
        {path: "/", component: main},
    ]
})