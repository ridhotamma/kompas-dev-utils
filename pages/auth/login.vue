<script>
import { signIn } from '~/services/auth'

export default {
  layout: 'auth',
  name: 'LoginPage',
  data() {
    return {
      valid: true,
      rules: {
        email: (v) => !!v || 'email is required',
        password: (v) => !!v || 'password is required',
      },
      isLoading: false,
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.signInUser()
      }
    },
    async signInUser() {
      this.isLoading = true
      const response = await signIn(this.user.email, this.user.password)

      if (response.isSuccess) {
        this.$store.dispatch('initializeUserData', {
          userData: { email: response?.data.email },
          accessToken: response?.data.accessToken,
          isAuthenticated: true,
        })

        this.isLoading = false
        this.$router.push('/')
        this.$alert({ type: 'success', message: 'successfully login' })
      }

      if (response.isError) {
        this.$alert({ type: 'error', message: response.errorDetail.errorCode })
        this.isLoading = false
      }
    },
  },
}
</script>

<template>
  <v-card height="auto" width="400px" class="pa-4">
    <h2 class="text-center py-4">Login</h2>
    <v-divider></v-divider>
    <v-card-text>
      <v-form ref="form" @submit="validate" v-model="valid" lazy-validation>
        <v-text-field
          :rules="[rules.email]"
          required
          outlined
          label="email"
          dense
          v-model="user.email"
        ></v-text-field>
        <v-text-field
          :rules="[rules.password]"
          required
          outlined
          dense
          type="password"
          label="password"
          v-model="user.password"
          @keyup.native.enter="validate"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="px-4">
      <v-btn :loading='isLoading' :disabled="!valid" @click="validate" width="100%" color="primary"
        >Login</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

