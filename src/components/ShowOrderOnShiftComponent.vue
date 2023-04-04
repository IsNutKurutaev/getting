<template>
  <div>
    <transition v-if="error != null">
      <div class="alert">
        {{ error }}
      </div>
    </transition>
    <form class="input-group" method="get">
      <input type="number" placeholder="Shift id" class="form-control" v-model="shift_id">
      <input type="submit" class="form-control btn btn-dark" @click.prevent="openShift">
    </form>
    <table v-if="response != null" class="table">
      <thead>
      <tr>
        <th scope="col">start</th>
        <th scope="col">end</th>
        <th scope="col">active</th>
        <th scope="col">orders</th>
        <th scope="col">amount</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="data in response.data" :key="data.id">
        <th>{{ data.start }}</th>
        <th>{{ data.end }}</th>
        <th>{{ data.active ? 'yes' : 'no' }}</th>
        <th>{{ data.orders }}</th>
        <th>{{ data.amount_for_all }}</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OpenShiftComponent",
  data() {
    return {
      shift_id: null,
      token: localStorage.token ?? null,
      response: null,
      error: null,
    }
  },
  methods: {
    async openShift() {
      await axios.get('http://localhost/api-tort/work-shift/' + this.shift_id + '/order', {
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })
          .then(res => this.response = res.data)
          .catch(e => this.error = (e.response.data.error.code + " " + e.response.data.error.message))
    }
  }
}
</script>

<style scoped>

</style>