<template>
	

	  <v-flex xs12 sm12>
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
		color="primary"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="time"
          label="Schedule Time"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker  color="deep-purple lighten-1"
          v-if="modal2"
          v-model="time"
          full-width
        >
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-flex>


</template>
<script>
  export default {
    data () {
      return {
        time: null,
        menu2: false,
        modal2: false
      }
    }
  }
</script>
