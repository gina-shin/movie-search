<template>
  <div class="nav mobile-only">
    <Slider
      format="full"
      :links="menuItems"
      class="mobile-slider"
    />
    <h2>
      MOVIE SEARCH
    </h2>
  </div>
</template>

<script>
import Slider from '@jeremyhamm/vue-slider';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      menuItems: [
        {
          text: 'Menu 1',
        },
        {
          text: 'Menu 2',
        },
        {
          text: 'Menu 3',
        },
        {
          text: 'Menu 4',
        },
        {
          text: 'Menu 5',
        },
        {
          text: 'Menu 6',
        },
        {
          text: 'Menu 7',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
  .mobile-slider {
    text-align: left;

    .navMenu {
      background-color: var(--dark-blue);
    }
  }
</style>
