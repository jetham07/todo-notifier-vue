
import router from './route';
import  store  from './store';

require('./bootstrap');

window.Vue = require('vue');

const app = new Vue({
	
	el: '#app',
	router,
	store,
	
});
