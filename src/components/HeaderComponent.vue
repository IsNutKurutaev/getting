<template>
  <header class="header"
          ref="header"
          :class="{blue: isSticky}">
    <div class="container">
      <nav class="nav">
        <a class="nav__item" v-for="item in navItems" :href="'#' + item.ref" v-smooth-scroll
           :key="item.id">{{ item.name }}</a>
      </nav>
      <CallbackButtonComponent class="button">Записаться</CallbackButtonComponent>
    </div>
  </header>
</template>

<script>
import CallbackButtonComponent from "@/components/buttons/CallbackButtonComponent";

export default {
  components: {
    CallbackButtonComponent,
  },
  data() {
    return {
      navItems: [
        {
          ref: 'about',
          name: 'О Нас',
        },
        {
          ref: 'process',
          name: 'Процесс',
        },
        {
          ref: 'services',
          name: 'Услуги',
        },
        {
          ref: 'gallery',
          name: 'Галерея',
        },
        {
          ref: 'contacts',
          name: 'Контакты',
        },
      ],
      isSticky: false,
    }
  },
  methods: {
    onscroll() {
      const header = this.$refs.header;
      const offset = header.getBoundingClientRect().top + window.scrollY;

      if (offset > 40) {
        this.isSticky = true;
        return;
      }

      this.isSticky = false;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onscroll);
  }
}
</script>

<style scoped>
.header {
  margin: 20px 0;
  background: #FFFFFF;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: auto 1200px auto;
  position: sticky;
  top: 0;
  z-index: 9;
  transition: .5s ease-in-out;
}
.blue {
  background: #2929A9;
}
.blue a {
  color: #FFFFFF!important;
}
.container {
  grid-column: 2/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  height: 100%;
}

.nav__item {
  text-decoration: none;
  color: #000000;
  margin-right: 100px;
  position: relative;
  display: flex;
  align-items: center;
}

.nav__item:last-child {
  margin-right: 0;
}

.nav__item::after {
  content: '';
  border-bottom: var(--primary-color) 3px solid;
  position: absolute;
  width: 0;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  opacity: 0;
  transition: .5s ease-in-out;
}

.nav__item:hover::after {
  opacity: 1;
  width: 100%;
}

.button {
  height: 40px;
  box-sizing: border-box;
}
</style>