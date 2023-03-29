<template>
  <div class="section-1" :style="{height: backHeight + 'px',}">
    <img src="@/assets/icons/logo-car.svg">
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
      console.log('1')
    }
  },
}
</script>

<style scoped>
.section-1 {
  grid-column: 1/4;
  background: url('@/assets/main_page/img1.jpg') no-repeat;
  background-size: cover;
}
</style>