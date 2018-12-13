<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        <v-toolbar>
          <v-toolbar-title class="teal--text">Task List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
			<v-btn flat color="blue" to="add-todo">Add Task</v-btn>
		
        </v-toolbar>
        <v-list two-line>
          <template v-for="(todo, index) in todos">
            <v-list-tile :key="index" avatar ripple @click="">
              <v-list-tile-content>
                <v-list-tile-title>{{ todo.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ todo.subtitle }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ todo.task }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ todo.action }}</v-list-tile-action-text>
                <v-icon color="grey lighten-1">star_border</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < todos.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
	flat: true,
	hover: true,	
	computed : {
		...mapState(['todos']),
		
	},
	methods: {
		...mapActions(['toggleTodo','deleteTodo']),

	}

}
</script>
