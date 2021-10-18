<template>
  <v-app>
    <v-app-bar app color="grey" dark>
      <div class="d-flex align-center">
        <a href="https://www.imdb.com/movies-in-theaters/" target="_blank">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 mt-16 hidden-md-and-down"
            contain
            src="@/assets/camera.jpg"
            transition="scale-transition"
            width="80"
            target="_blank"
          />
        </a>

        <h1 class="mr-2 display-1">Movies</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
