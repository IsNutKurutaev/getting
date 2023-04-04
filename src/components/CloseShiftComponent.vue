<template>
  <div>
    <transition v-if="response != null">
      <div class="alert">
        {{ response }}
      </div>
    </transition>
    <form class="input-group" method="get">
      <input type="number" placeholder="Close" class="form-control" v-model="shift_id">
      <input type="submit" class="form-control btn btn-dark" @click.prevent="closeShift">
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
      token: localStorage.token ?? null,
      response: null,
    }
  },
  methods: {
    async closeShift() {
      await axios.get('http://localhost/api-tort/work-shift/' + this.shift_id + '/close', {
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })
          .then(() => this.response = 'Close!')
          .catch(e => this.response = (e.response.data.error.code + " " + e.response.data.error.message))
    }
  }
}
</script>

<style scoped>

</style>