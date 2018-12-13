
import router from './route';
import  store  from './store';
import Vuetify from 'vuetify';

require('./bootstrap');

window.Vue = require('vue');

Vue.use(Vuetify);

export default new Vue({
	
	el: '#app',
	router,
	store,
	
});
