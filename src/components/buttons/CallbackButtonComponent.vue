<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "CallbackButtonComponent",
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
  }
</style>