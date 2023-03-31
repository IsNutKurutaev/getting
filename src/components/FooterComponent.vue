<template>
  <div class="container">
    <div class="section">
      <div class="section-logo">
        <img src="@/assets/icons/logo-car.svg" alt="Пионер Авто">
        <a href=""><img src="@/assets/icons/telegram-logo.svg" alt=""></a>
        <a href=""><img src="@/assets/icons/vk-logo.svg" alt=""></a>
      </div>
      <div class="section-contacts">

      </div>
      <div class="section-address">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
  .container {
    background: #2929A9;
    padding: 50px 0 0 0;
    grid-column: 1/4;
    display: grid;
    grid-template-columns: auto 1200px auto;
  }
  .section {
    grid-column: 2/3;
  }
  .section-logo {
    
  }
</style>