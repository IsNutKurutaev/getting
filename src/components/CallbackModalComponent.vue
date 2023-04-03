<template>
  <div class="background" @click="close($event)" ref="back">
    <form action="" class="form">
      <input type="text" id="name" placeholder="Ваше Имя" class="form-field">
      <input type="tel" placeholder="Номер телефона" class="form-field" v-model="tel">
      <div>
        <input list="mark" placeholder="Марка автомобиля" class="form-field" style="margin-right: 40px">
        <datalist id="mark">
          <option value="hundai"></option>
        </datalist>
        <input list="year" placeholder="Год" class="form-field" style="width: 20%;">
        <datalist id="year">
          <option v-for="year in arrOfYears" :value="year" :key="year.id">{{ year }}</option>
        </datalist>
      </div>
      <input list="model" placeholder="Модель автомобиля" class="form-field">
      <datalist id="model">
        <option value="civic"></option>
      </datalist>
      <div class="submit">
        <div style="display: flex; gap: 5px; align-items: center">
          <input type="checkbox" class="checkbox" id="person-data" style="height: 25px; width: 25px">
          <label for="person-data" style="font-size: 12px"> согласие на боратботку <br>персональных данных </label>
        </div>
        <input type="submit" class="form-submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CallbackModalComponent",
  data() {
    return {
      arrOfYears: [],
      tel: '',
    }
  },
  methods: {
    close(event) {
      if (event.target == this.$refs.back) {
        this.callback().$emit('close')
        window.removeEventListener('wheel', this.scrollLock);
      }
    }
  },
  inject: ['callback', 'scrollLock'],
  mounted() {
    for (let i = 2023; i >= 1962; i--) {
      this.arrOfYears.push(i);
    }
  },
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.background {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9998;
  display: grid;
  grid-template-rows: 15% auto auto;
  grid-template-columns: 15% auto 15%;
}

.form {
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 25px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}

.form-field {
  border: none;
  border-bottom: #FD7A00 solid 1px;
  padding: 10px;
}

.form-submit {
  background: #FD7A00;
  color: #FFFFFF;
  border: none;
  padding: 10px 30px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
}

.submit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
</style>