<template>
  <LayoutComponent>
    <transition>
      <CallbackModalComponent v-show="isModalOpen" v-scroll-lock="isModalOpen" ref="callback"
                              @open="() => {this.isModalOpen = true}"
                              @close="() => {this.isModalOpen = false}"/>
    </transition>
    <HeaderComponent/>
    <FirstSectionComponent/>
    <WelcomeSectionComponent/>
    <TariffCardComponent/>
    <FooterComponent/>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from "@/layouts/LayoutComponent"
import CallbackModalComponent from "@/components/CallbackModalComponent";
import HeaderComponent from "@/components/HeaderComponent";
import FirstSectionComponent from "@/components/pages/MainComponents/FirstSectionComponent";
import WelcomeSectionComponent from "@/components/pages/MainComponents/WelcomeSectionComponent";
import TariffCardComponent from "@/components/pages/MainComponents/TariffCardComponent";
import FooterComponent from "@/components/FooterComponent";
import throttle from 'lodash/throttle';

export default {
  name: "MainPage",
  components: {
    CallbackModalComponent,
    LayoutComponent,
    HeaderComponent,
    FirstSectionComponent,
    WelcomeSectionComponent,
    TariffCardComponent,
    FooterComponent,
  },
  data() {
    return {
      isFirstScroll: true,
      isModalOpen: false,
    }
  },
  provide() {
    return {
      callback: this.getModal,
      scrollLock: this.scrollLock,
    }
  },
  methods: {
    getModal() {
      return this.$refs.callback;
    },
    handleScroll(e) {
      if (screen.width < 960 ) return;
      if (this.isFirstScroll) {
        e.preventDefault();
        const el = document.getElementById('about').offsetTop - 20;
        window.scrollTo({top: el, behavior: "smooth"})
        return this.isFirstScroll = false;
      }
      return true;
    },
    scrollLock(e) {
      e.preventDefault();
    },
  },
  mounted() {
    this.handleDebouncedScroll = throttle(this.handleScroll, 7500);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },
}
</script>

<style>
.h {
  font-family: "Oswald";
  font-weight: 500;
  font-size: 30px;
}

.h-1 {
  font-size: 32px;
}

.h-2 {
  margin: 20px 0;
  text-indent: 50px;
}

.h-4 {
  font-size: 16px;
}
</style>