<template>
  <LayoutComponent>
    <HeaderComponent />
    <FirstSectionComponent />
  </LayoutComponent>
</template>

<script>
import LayoutComponent from "@/layouts/LayoutComponent"
import HeaderComponent from "@/components/HeaderComponent";
import FirstSectionComponent from "@/components/pages/MainComponents/FirstSectionComponent";

export default {
  name: "MainPage",
  components: {
    LayoutComponent,
    HeaderComponent,
    FirstSectionComponent,
  },
}
</script>

<style scoped>

</style>