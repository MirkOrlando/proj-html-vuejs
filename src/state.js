import Vue from 'vue'

const state = Vue.observable({
    navItems: ["Home", "Services", "About", "Videos", "Blog", "Store"],
    activeNavItem: 0,
})

export default state