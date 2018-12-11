import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
export default new Vuex.Store({

	state: {
		todos : [
			{
				id : 1,
				task : 'This is my first Todo',
				completed: false
			},
			{
				id : 2,
				task : 'This is my second Todo',
				completed: false
			},
			{
				id : 3,
				task : 'This is my third Todo',
				completed: false
			}
		]
		
	},
	getters: {
		getTodos : state => state.todos

	},
	mutations: {
		ADD_TODO : (state, payload) => {
			var newTask = {
				id  : payload.newId,
				task : payload.task,
				completed: false
			}
			state.todos.unshift(newTask);
		},
		TOGGLE_TODO : (state,payload) => {
			let item = state.todos.find(todo => todo.id === payload);
			item.completed = !item.completed;
		},
		DELETE_TODO : (state , payload) => {
			let index = state.todos.findIndex(todo => todo.id === payload);
			state.todos.splice(index,1);
		}
	},
	actions:{
		addTodo : (context, payload) => {
			context.commit("ADD_TODO",payload);
		},
		toggleTodo : (context, payload ) => {
			context.commit("TOGGLE_TODO",payload);
		},
		deleteTodo : (context, payload) => {
			context.commit('DELETE_TODO',payload);
		}
	}

})