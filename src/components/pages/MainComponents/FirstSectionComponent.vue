<template>
  <div class="section" :style="{height: backHeight + 'px',}">
    <img src="@/assets/icons/logo-car-opacity.svg" alt="Антикор мастерская пионер авто" class="logo">
    <div class="content">
      <div class="head">
        <div class="head-text">
          Антикорозийная мастерская
        </div>
        <div class="head-text-add">
          Пионер Авто
        </div>
      </div>
      <p class="slogan">
        Ещё одна прекрасная машина обрела новую долгую жизнь
      </p>
      <callback-button-component class="button">Записаться</callback-button-component>
    </div>
  </div>
</template>

<script>
import CallbackButtonComponent from "@/components/buttons/CallbackButtonComponent";

export default {
  name: "FirstSectionComponent",
  components: {
    CallbackButtonComponent,
  },
  data() {
    return {
      backHeight: 0,
      isScrolled: false,
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
    },
  },
}
</script>

<style scoped>
.section {
  grid-column: 1/4;
  background: url('@/assets/main_page/img1.jpg') no-repeat;
  background-size: cover;
  position: relative;
  font-family: Oswald;
  font-weight: 500;
}
.logo {
  position: absolute;
}
.content {
  display: grid;
  grid-template-columns: auto 1200px auto;
  padding-top: 10%;
  justify-items: flex-end;
  gap: 60px;
}
.head {
  grid-column: 2/3;
  font-size: 64px;
  color: #FFFFFF;
  text-indent: 100px;
}
.head-text-add {
  text-indent: 0;
  z-index: 2;
}
.head-text-add:before {
  content: '';
  background: url("@/assets/icons/quot-start.svg");
  height: 33px;
  width: 35px;
}
.head-text-add:after {

}
.slogan {
  grid-column: 2/3;
  justify-self: flex-start;
  font-size: 32px;
  color: #FFFFFF;
}
.button {
  grid-column: 2/3;
  font-family: Roboto;
  font-size: 32px;
  padding: 20px 60px;
}
</style>