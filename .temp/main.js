import Vue from 'vue'
import weex from 'weex-vue-render'
weex.init(Vue)
/* weex initialized here, please do not move this line */
const { router } = require('./router')
const App = require('@/App.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/index')