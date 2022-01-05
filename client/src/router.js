import Vue from "vue"
import Router from "vue-router"

import Main from "./components/Main"
import Home from "./components/Home"
import Doctors from "./components/Doctors"
import Pacienti from "./components/Pacienti"
Vue.use(Router)
const router = new Router({
    mode: "history",
    routes: [
        { path: "/", name: Main, component: Main },
        { path: "/home", name: Home, component: Home },
        { path: "/Doctors", name: Doctors, component: Doctors },
        { path: "/Pacienti", name: Pacienti, component: Pacienti }
    ]
})
export default router