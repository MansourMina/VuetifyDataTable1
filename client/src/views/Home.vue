<template>
  <v-container>
    <v-alert border="right" color="blue-grey" dark class="ma-10">
      Rent selected movies: {{ selected.map(el => el.title).toString() }}
    </v-alert>
    <v-card >
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="movies"
        itmes-key="title"
        v-model="selected"
        :single-select="singleSelect"
        show-select
        :footer-props= "{itemsPerPageOptions: [6,12,18]}"
      >
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      singleSelect: false,
      selected: [],
      search: '',
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
          class: 'blue-grey lighten-5',
        },
        { text: 'Director', value: 'director', class: 'blue-grey lighten-5' },
        { text: 'Genre', value: 'main_genre', class: 'blue-grey lighten-5' },
        {
          text: 'Year',
          value: 'year',
          width: '100',
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Rated',
          value: 'rated',
          width: '100',
          class: 'blue-grey lighten-5',
        },
        { text: 'Plot', value: 'plot' },
      ],
      movies: [{}],
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      const { data } = await axios({
        url: 'http://localhost:3000/movies',
        method: 'GET',
      });
      this.movies = data;
    },
  },
};
</script>
