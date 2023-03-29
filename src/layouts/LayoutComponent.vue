<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>

export default {
  name: "LayoutComponent"
}
</script>

<style>
html {
  --primary-color: #FD7A00;
}
body {
  background: #EFECF3;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 100%;
}
 .wrapper {
   display: grid;
   grid-template-columns: auto 1200px auto;
   grid-auto-rows: auto;
 }
</style>