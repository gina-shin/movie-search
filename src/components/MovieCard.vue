<template>
  <div
    class="movie-card"
    @click="$emit('show-detail', movie)"
  >
    <h1>
      {{ movie.Title }}
    </h1>
    <h3>
      {{ movie.Year }}
    </h3>
    <img
      :src="movie.Poster"
    />
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
  .movie-card {
    background: var(--gray-1);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.2);
    padding: 1em;

    @media screen and (max-width: 600px) {
      flex-basis: fill;
      margin: 1em;
    }

    img {
      margin-top: 1em;
      width: 100%;
      object-fit: contain;
    }
  }
</style>
