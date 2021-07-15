import Vue from 'vue'
import copy from './copy'
import longpress from './longpress'
import emoji from './emoji'
import LazyLoad from './LazyLoad'
import permission from './permission'
import waterMarker from './waterMarker'
// Vue.directive('firsttry',copy)
Vue.directive('emoji',emoji)
Vue.directive('LazyLoad', LazyLoad);
Vue.directive('permission',permission)
Vue.directive('waterMarker',waterMarker)
Vue.directive('permission',permission)