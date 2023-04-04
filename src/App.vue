<template>
  <nav class="d-flex justify-content-center breadcrumb">
    <router-link class="breadcrumb-item" to="/">login</router-link>
    <router-link class="breadcrumb-item" to="/registration">registration</router-link>
    <router-link class="breadcrumb-item" to="admin">admin</router-link>
    <button class="btn btn-dark" v-if="token" @click.prevent="logout" style="position: absolute; right: 10px; top: 10px;">Выйти</button>
  </nav>
  <router-view/>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      token: localStorage.token ?? null,
    }
  },
  methods: {
    async logout() {
      await axios.get('http://localhost/api-tort/logout', {
        headers: {
          'Authorization': 'Bearer ' + this.token,
        }
      }).then(() => { this.token = null, localStorage.removeItem('token') })
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
