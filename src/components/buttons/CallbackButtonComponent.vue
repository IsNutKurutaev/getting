<template>
  <button class="button" @click="a">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: "CallbackButtonComponent",
  data() {
    return {
      isModalOpen: this.$refs.callback
    }
  },
  methods: {
    a() {
      this.callback().$emit('open');
      window.addEventListener('wheel', this.scrollLock, {passive: false});
    }
  },
  inject: ['callback', 'scrollLock'],
}
</script>

<style scoped>
.button {
  background: var(--primary-color);
  border: none;
  border-radius: 0;
  color: #FFFFFF;
  font-weight: 500;
  padding: 12px 25px;
  cursor: pointer;
  transition: .5s ease-in-out;
}

.button:hover {
  opacity: 0.8;
}
</style>