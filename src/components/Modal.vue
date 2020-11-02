<template>
  <div
    class="modal-backdrop"
    ref="modalBackdrop"
  >
    <ModalContent
      :movie="movie"
      @close-modal="closeModal()"
    />
  </div>
</template>

<script>
import ModalContent from './ModalContent.vue';

export default {
  components: {
    ModalContent,
  },

  props: {
    movie: {
      type: Object,
    },
  },

  methods: {
    closeModal() {
      this.$emit('close');
    },
  },

  mounted() {
    window.onclick = (event) => {
      if (event.target === this.$refs.modalBackdrop) {
        this.closeModal();
      }
    };
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0, 0.4);
}
</style>
