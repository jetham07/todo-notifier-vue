<template>
  <v-flex xs12 sm12 md12>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Schedule Date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable class="deep-purple lighten-1" color="deep-purple lighten-1">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" class="white--text" @click="modal = false">Cancel</v-btn>
          <v-btn flat color="primary" class="white--text"  @click="$refs.dialog.save(date)">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
	
</template>
<script>
export default {
	 data: () => ({
      date:null,
      menu: false,
      modal: false,
    })
}
</script>
