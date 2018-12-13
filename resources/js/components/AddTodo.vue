<template>
  <v-card
    class="mx-auto"
    style="max-width: 800px;"
  >
    <v-toolbar flat >
      <v-card-title class="title font-weight-regular">Create Task</v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form
      ref="form"
      v-model="form"
      class="pa-3 pt-4"
    >
	
      <v-text-field
        box
        color="deep-purple"
        label="Task Title"
        style="min-height: 96px"
      ></v-text-field>
	  <v-text-field
        box
        color="deep-purple"
        label="Subtitle"
      ></v-text-field>
      <v-textarea
        v-model="bio"
        auto-grow
        box
        color="deep-purple"
        label="Task Description"
        rows="1"
      ></v-textarea>
	  <date-component></date-component>
	  <time-component></time-component>
      
	  
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        flat
        @click="$refs.form.reset()"
      >
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
      >Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

import DateComponent from './DateComponent.vue'
import TimeComponent from './TimeComponent.vue'
  export default {
	components: {
		DateComponent,
		TimeComponent
	},
    data: () => ({
      agreement: false,
      bio: '',
      form: false,
      isLoading: false,
    
    })
  }
</script>