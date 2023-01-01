<template>
  <v-container fluid>
    <v-row>
      <UserActivity />
    </v-row>
  </v-container>
</template>
<script>
import UserActivity from '~/components/user-activity/index.vue'

export default {
  middleware: 'auth',
  components: { UserActivity },
  name: 'IndexPage',
  data() {
    return {}
  },
}
</script>
