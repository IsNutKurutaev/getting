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
      isModalOpen: false,
      scrolling: false,
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
      // if (screen.width < 960) return;
      e.preventDefault();
      const elem = document.getElementById('about');

      if (!this.scrolling) {
        elem.scrollIntoView();
        this.scrolling = true;
      }
      if (!this.observer) {
        this.$data.observer = new IntersectionObserver((entries) => {
          entries.forEach( item =>  {
            if(item.isIntersecting) {
              window.removeEventListener('wheel', this.handleScroll);
              this.scrolling = false;
              delete this.$data.observer;
            }
          });
        });

        this.$data.observer.observe(elem);
      }
    },
  },
  mounted() {
    window.addEventListener('wheel', this.handleScroll, {passive: false});
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