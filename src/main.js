import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/flexible'

Vue.config.productionTip = false
// Vue.prototype.$http = axios  //axios挂载在vue实例上

import { Button, NoticeBar, Tabbar, TabbarItem, Icon, Search, Grid, GridItem, Card, Swipe, SwipeItem, Lazyload, Stepper, SubmitBar, Toast, Empty, ActionSheet, Dialog } from 'vant';
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Card);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Toast);
Vue.use(Empty);
Vue.use(ActionSheet);
Vue.use(Dialog);
Vue.use(NoticeBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
