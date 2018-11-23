<template>
    <v-app id="app">
      <v-navigation-drawer v-model="drawer" fixed app>
        <v-list dense>
          <v-list-tile v-on:click.prevent="navigateTo('/')">
          <v-list-tile-action>
            <v-icon medium color="teal darken-2">home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-on:click.prevent="navigateTo('/uploadproductmaster')">
          <v-list-tile-action>
            <v-icon medium color="teal darken-2">present_to_all</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Product Master</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-on:click.prevent="navigateTo('/uploadstorewisestock')">
          <v-list-tile-action>
            <v-icon medium color="teal darken-2">present_to_all</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Product Storewise Stock</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Uploads</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
      </v-list>
      </v-navigation-drawer>
        <v-toolbar color="cyan" dark fixed app>
          <v-toolbar-side-icon v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title>QArt Dashboard</v-toolbar-title>
        </v-toolbar>
         <v-content>
          <v-container fluid>
          <router-view></router-view>
          </v-container>
        </v-content>
      <v-footer app></v-footer>
    </v-app>   
</template>
<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    methods:{
      navigateTo: function (nav) {
    // Do what you want here.
    // this.saveTheThing()
    console.log(nav)
          this.$router.push(nav)
      }
    }
  }
</script>