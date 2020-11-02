<template>
  <dialog open
    class="modal-content"
  >
    <button
      class="button-close"
      @click="$emit('close-modal')"
    >
      x
    </button>
    <img :src="movie.Poster" :alt="`Movie poster for ${movie.Title}`">
    <section
      class="header"
    >
    <h1>
      {{ movie.Title }}
    </h1>
    <h3>
      {{ movie.Year }}
    </h3>
    </section>
    <section
      class="body"
    >
      <div>
        <p>Rated: {{ movie.Rated || 'N/A' }}  </p>
        <p>Released: {{ movie.Released || 'N/A' }}</p>
        <p>Runtime: {{ movie.Runtime || 'N/A' }}</p>
        <p>Genre: {{ movie.Genre || 'N/A' }}</p>
        <p>Director: {{ movie.Director || 'N/A' }}</p>
      </div>
      <div>
        <p>Writer: {{ movie.Writer || 'N/A' }}</p>
        <p>Actors: {{ movie.Actors || 'N/A' }}</p>
        <p>Plot: {{ movie.Plot || 'N/A' }}</p>
        <p>Language: {{ movie.Language || 'N/A' }}</p>
        <p>Country: {{ movie.Country || 'N/A' }}</p>
      </div>
    </section>
  </dialog>
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
  .modal-content {
    display: flex;
    flex-direction: column;
    top: 10%;
    width: 60%;

    border: none;

    img {
      justify-self: center;
      object-fit: contain;
    }

    .header {
      color: var(--dark-blue);
      padding: 2em 0 0 1em;
    }

    .body {
      display: flex;
      justify-content: space-between;
      margin: 1em;
    }

    .button-close {
      align-self: flex-end;

      border: none;
      background: transparent;
      font-size: 1.5em;
      font-weight: 500;
      padding-bottom: 0.5em;

      cursor: pointer;
    }
  }
</style>
