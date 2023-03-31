<template>
  <div class="section" :style="{height: backHeight + 'px',}">
    <img src="@/assets/icons/logo-car-opacity.svg">
  </div>
</template>

<script>

export default {
  name: "FirstSectionComponent",
  data() {
    return {
      backHeight: 0,
    }
  },
  mounted() {
    this.resizeBack();
    window.addEventListener('resize', this.resizeBack);
  },
  methods: {
    resizeBack() {
      const header = document.querySelector('.header');
      const bodyHeight = document.documentElement.clientHeight;

      this.backHeight = bodyHeight - (header.offsetHeight + 40);
    }
  },
}
</script>

<style scoped>
.section {
  grid-column: 1/4;
  background: url('@/assets/main_page/img1.jpg') no-repeat;
  background-size: cover;
}
</style>