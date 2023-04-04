<template>
  <div>
    <transition v-if="response != null">
      <div class="alert">
        {{ response }}
      </div>
    </transition>
    <form class="input-group" method="get">
      <input type="number" placeholder="Shift id" class="form-control" v-model="shift_id">
      <input type="number" placeholder="Worker id" class="form-control" v-model="worker_id">
      <input type="submit" class="form-control btn btn-dark" @click.prevent="openShift">
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OpenShiftComponent",
  data() {
    return {
      shift_id: null,
      worker_id: null,
      token: localStorage.token ?? null,
      response: null,
    }
  },
  methods: {
    async openShift() {
      await axios.post('http://localhost/api-tort/work-shift/' + this.shift_id + '/user',{
        user_id: this.worker_id,
      }, {
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })
          .then(() => this.response = 'Added!')
          .catch(e => this.response = (e.response.data.error.code + " " + e.response.data.error.message))
    }
  }
}
</script>

<style scoped>

</style>