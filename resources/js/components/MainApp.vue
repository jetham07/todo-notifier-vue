<template>
  <v-layout  row>
     <v-flex sm6 offset-sm3> 
		<v-card>
			<v-card-title primary-title>
			<div>
				<div class="headline font-weight-bold teal--text">Todo-Notifier</div>
				<h4>Set time and it will notify your todo`s right away. Try it now!</h4>
			</div>
			</v-card-title>
			<v-card-actions>
			<v-btn flat  to="/todo"  class="deep-purple white--text">Click Me</v-btn>
			</v-card-actions>
		</v-card>
	</v-flex>
	
  </v-layout>
  
</template>
<script>
export default {

}
</script>
