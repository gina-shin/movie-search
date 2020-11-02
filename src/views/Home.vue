<template>
  <div class="home">
    <Sidebar
    />
    <GalleryView />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import GalleryView from './GalleryView.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    GalleryView,
  },
};
</script>

<style lang="scss">
  .home {
    display: flex;
    height: 100%;
    background: var(--gray-3);
  }
</style>
