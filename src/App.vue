<template>
  <div id="app">
    <DesktopNavigationBar />
    <MobileNavigationBar />
    <Home />
  </div>
</template>

<script>
import DesktopNavigationBar from './components/DesktopNavigationBar.vue';
import MobileNavigationBar from './components/MobileNavigationBar.vue';
import Home from './views/Home.vue';

export default {
  components: {
    DesktopNavigationBar,
    MobileNavigationBar,
    Home,
  },
};
</script>

<style lang="scss">
@import './styles/colors.scss';
@import './styles/typography.scss';
@import './styles/responsive.scss';

body {
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

.nav {
  position: relative;
  padding: 1em;
  background-color: var(--blue);
  color: var(--white);
}

</style>
