import Vue from 'vue';
import Router from 'vue-router';
import rightView from 'components/rightView/rightView';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'rightView',
      component: rightView
    }
  ]
});
