	<template id="app-template">
        <div>
            <form @submit.prevent="addTodo" class="add-form">
                <input class="todo-input" type="text" placeholder="Enter a new Task" v-model="task" />
            </form>
          
        </div>
    </template>

	
	<script>

	export default {
		data : () => ({
			task : "",
			newId: 4
		}),
	
		methods: {
		addTodo: function() {
                this.$store.dispatch("addTodo", this);
                this.newId ++;
                this.task = "";
            }
		}

	}
	</script>
	