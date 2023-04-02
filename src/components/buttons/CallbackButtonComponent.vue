<template>
  <button class="button" @click="a">
    <slot></slot>
  </button>
</template>

<script>
import mainPage from "@/components/pages/MainPage";

export default {
  name: "CallbackButtonComponent",

  methods: {
    a() {
      mainPage.methods.openModal();
    }
  }
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