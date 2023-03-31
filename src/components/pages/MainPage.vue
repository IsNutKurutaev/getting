<template>
  <LayoutComponent>
    <HeaderComponent />
    <FirstSectionComponent />
    <WelcomeSectionComponent />
    <TariffCardComponent />
    <FooterComponent />
  </LayoutComponent>
</template>

<script>
import LayoutComponent from "@/layouts/LayoutComponent"
import HeaderComponent from "@/components/HeaderComponent";
import FirstSectionComponent from "@/components/pages/MainComponents/FirstSectionComponent";
import WelcomeSectionComponent from "@/components/pages/MainComponents/WelcomeSectionComponent";
import TariffCardComponent from "@/components/pages/MainComponents/TariffCardComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "MainPage",
  components: {
    LayoutComponent,
    HeaderComponent,
    FirstSectionComponent,
    WelcomeSectionComponent,
    TariffCardComponent,
    FooterComponent,
  },
}
</script>

<style>
  .h {
    font-family: "Oswald";
    font-weight: 500;
    font-size: 32px;
  }
  .h-1 {
    font-size: 36px;
  }
  .h-2 {
    margin: 20px 0;
    text-indent: 50px;
  }
  .h-4 {
    font-size: 20px;
  }
</style>