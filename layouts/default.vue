<script>
import menuItems from '@/static/menu'
import { logout } from "~/services/auth"

export default {
  data: () => ({
    drawer: null,
    menuItems,
    selectedItem: 0,
  }),

  methods: {
    async handleLogout() {
      const res = await logout()
      if (res.success) {
        this.$store.dispatch('logoutUser')
        this.$router.go()
        this.$alert({ type: 'success', message: res.message })
      }
    }
  }
}
</script>
<template>
  <v-app id="main">
    <v-navigation-drawer style="z-index: 99;" v-model="drawer" app>
      <v-toolbar class="d-flex" elevation="0" color="blue" height="67px">
        <v-avatar class="mr-4">
          <img src="~/static/logo-kompas.png" alt="John" />
        </v-avatar>
        <div class="text-p white--text">Kompas Creative</div>
      </v-toolbar>
      <v-list>
        <v-subheader>Dashboard Menu</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            @click="$router.push(item.route)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar style="z-index: 98;" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex justify-end" style="width: 100%">
        <v-menu offset-y style="z-index: 99;">
          <template v-slot:activator="{ on, attrs }">
            <v-avatar v-bind="attrs" v-on="on">
              <v-icon large color="primary"> mdi-account-circle </v-icon>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon> mdi-account </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Your Account</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon> mdi-logout </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title @click="handleLogout">Logout</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-main>
      <v-breadcrumbs divider="\"></v-breadcrumbs>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style lang="scss">
a {
  text-decoration: none;
  color: black !important;
}

body {
  font-family: Roboto, sans-serif;
}

.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 20px;
}
</style>
