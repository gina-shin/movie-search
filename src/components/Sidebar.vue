<template>
  <div
    class="sidebar"
  >
    <ul
    >
      <li
        v-for="(menu, index) in menuItems"
        :key="index"
      >
        {{ menu }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        'Menu 1',
        'Menu 2',
        'Menu 3',
        'Menu 4',
        'Menu 5',
        'Menu 6',
        'Menu 7',
      ],
    };
  },
};
</script>

<style lang="scss">
  .sidebar {
    @media only screen and (max-width: 600px) {
      display: none;
    }

    padding: 1em;
    background-color: var(--dark-blue);
    color: var(--white);
    flex: 1;

    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    li {
      padding: 0.5em;
    }
  }
</style>
