import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

let routes = [
	{ 
		path: '/home', 
		 component: Vue.component('main-app',require('./components/MainApp.vue'))
	 },
	 { 
		path: '/todo', 
		 component: Vue.component('todo-list',require('./components/TodoList.vue'))
	 },
	 {
		 path: '/topbar',
		 component: Vue.component('top-bar',require('./components/TopBar.vue'))
	},
	{
		path: '/add-todo',
		component: Vue.component('add-todo',require('./components/AddTodo.vue'))
	}
	 
];
export default  new VueRouter({
	mode: 'history',
	routes

})


