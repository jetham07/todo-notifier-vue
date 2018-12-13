<template>
  <v-toolbar>
    <v-toolbar-title>Todo-Notifier</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
		<v-btn flat to="/home">Home</v-btn>
		<v-btn flat @click.prevent="logout" v-if="checkLogin">Logout</v-btn>
		
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
	 data: () => ({
		csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
		checkLogin : false
		
	}),
	mounted () {
		this.$store.commit('SET_AUTH_USER', window.auth_user);
		let user = this.$store.getters.isLoggedIn;
		if(user === undefined){
		}else{
			this.checkLogin= true;
		}
	},
	methods:{
		logout:function(){
			axios.post('/logout').then(response => {
				if (response.status === 302 || 401) {
				console.log('logout')
					location.href = '/login';
				}
				else {
				
				}
			}).catch(error => {

			});
		},
		
	},
}
</script>
<style>
body {
		background-color: #21D4FD;
		background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

	}
</style>
