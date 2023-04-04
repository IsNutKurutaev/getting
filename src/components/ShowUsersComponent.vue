<template>
  <transition>
    <div class="alert alert-warning" v-if="error">{{ error }}</div>
  </transition>
  <table class="table" v-if="data">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">login</th>
      <th scope="col">status</th>
      <th scope="col">role</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="el in data" :key="el.id">
      <th scope="row">{{ el.id }}</th>
      <td>{{ el.name }}</td>
      <td>{{ el.login }}</td>
      <td>{{ el.status }}</td>
      <td>{{ el.group }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowUsersComponent",
  data() {
    return {
      error: null,
      token: localStorage.token,
      data: null,
    }
  },
  async beforeMount() {
    await axios.get('http://localhost/api-tort/user', {
      headers: {
        'Authorization': 'Bearer ' + this.token,
      }
    })
        .then((res) => this.data = res.data.data)
        .catch((e) => this.error = (e.response.data.error.code + " " + e.response.data.error.message))
    return true;
  }
}
</script>

<style scoped>

</style>