<template>
  <div
    class="gallery-view"
  >
    <h1
      class="title"
    >
      Movie List
    </h1>
    <div
      class="grid"
    >
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @show-detail="openModal"
      />
    </div>
    <Modal
      v-if="selectedMovie"
      :movie="selectedMovie"
      @close="closeModal"
    />
  </div>
</template>

<script>
import axios from 'axios';

import MovieCard from '@/components/MovieCard.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    MovieCard,
    Modal,
  },

  data() {
    return {
      movies: [],
      selectedMovie: null,
    };
  },

  methods: {
    openModal(movieToShow) {
      this.selectedMovie = movieToShow;
    },
    closeModal() {
      this.selectedMovie = null;
    },
  },

  mounted() {
    axios.get('https://www.omdbapi.com/?apikey=a4d98298&s=coach')
      .then((moviesBySearch) => {
        console.log('moviesBySearch', moviesBySearch);
        this.movies = moviesBySearch.data.Search;
      });
  },
};
</script>

<style lang="scss">
  .gallery-view {

    padding: 1em;
    color: var(--dark-blue);
    flex: 7;
    overflow: scroll;

    .grid {
      @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 5em;
    }

    .title {
      margin: 0.5em
    }
  }
</style>
