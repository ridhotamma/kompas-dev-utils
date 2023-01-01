<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between">
        <h3>User List</h3>
        <v-btn small color="primary">
          <v-icon left> mdi-plus </v-icon>
          Add User</v-btn
        >
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="profiles"
          :items-per-page="8"
          class="elevation-1"
        >
          <template v-slot:[`item.is_active`]="{ item }">
            <v-chip pill small color="primary">
              {{ item.is_active ? 'Active' : 'Non Active' }}
            </v-chip>
          </template>

          <template v-slot:[`item.role`]="{ item }">
            <v-chip pill small>
              {{ item.role ? 'Admin' : 'General' }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getProfiles } from '~/services/profiles'

export default {
  middleware: 'auth',
  name: 'UserIndex',
  data: () => ({
    isLoading: false,
    profiles: [],
    headers: [
      {
        text: 'Full Name',
        value: 'full_name',
      },
      { text: 'Email', value: 'email' },
      { text: 'Role', value: 'role' },
      { text: 'Status', value: 'is_active' },
    ],
  }),
  methods: {
    async _getProfiles() {
      const result = await getProfiles()
      this.profiles = result
      console.log({ result })
    },
  },

  mounted() {
    this._getProfiles()
  },
}
</script>
