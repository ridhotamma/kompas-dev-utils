<script>
export default {
  name: 'AuthLayout',
  layout: 'auth',
}
</script>
<template>
  <v-app id="main">
    <v-main class="h-full bg-login-screen">
      <v-container class="h-full d-flex justify-center align-center" fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.h-full {
    height: 100vh;
}

.bg-login-screen {
  background-image: url('~/static/bg-login.jpg');
  background-size: cover;
  background-position: left;
  background-blend-mode: multiply;
  background-color: lightblue;
}
</style>
