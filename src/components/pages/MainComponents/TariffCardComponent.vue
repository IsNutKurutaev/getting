<template>
  <div class="container">
    <h1 class="h h-2">Услуги</h1>
    <div class="cards">
      <div class="card" v-for="(item, index) in card_data" :key="index">
        <div class="image-wrapper">
          <img :src="item.url.image" alt="Автомобиль">
        </div>
        <div class="card-description">
          <p class="h-4 card-description-text"
             v-html="item.desc">
          </p>
        </div>
        <div class="card-tariffs">
          <p class="card-text"  v-for="(tariff, i) in item.tariffs" :key="i"
             v-html="tariff">
          </p>
        </div>
        <callback-button-component class="h-4 card-button">Узнать цену</callback-button-component>
      </div>
    </div>
  </div>
</template>

<script>
import callbackButtonComponent from "@/components/buttons/CallbackButtonComponent";
export default {
  name: "TariffCardComponent",
  components: {
    callbackButtonComponent,
  },
  data() {
    return {
      card_data: [
        {
          url: {image: require('@/assets/icons/card-cars/car.png')},
          desc: 'Легковые автомобили <br>до 4 метров',
          tariffs: [
            'План минимум: <br>от 2 до 3 дней',
            'План базовый: <br>от 3 до 4 дней',
            'План премиум: <br>от 4 до 5 дней',
            'План премиум+: <br>от 5 до 6 дней',
          ],
        },
        {
          url: {image: require('@/assets/icons/card-cars/car.png')},
          desc: 'Легковые автомобили <br>до 4 метров',
          tariffs: [
            'План минимум: <br>от 2 до 3 дней',
            'План базовый: <br>от 3 до 4 дней',
            'План премиум: <br>от 4 до 5 дней',
            'План премиум+: <br>от 5 до 6 дней',
          ],
        },
        {
          url: {image: require('@/assets/icons/card-cars/car.png')},
          desc: 'Легковые автомобили <br>до 4 метров',
          tariffs: [
            'План минимум: <br>от 2 до 3 дней',
            'План базовый: <br>от 3 до 4 дней',
            'План премиум: <br>от 4 до 5 дней',
            'План премиум+: <br>от 5 до 6 дней',
          ],
        },
        {
          url: {image: require('@/assets/icons/card-cars/car.png')},
          desc: 'Легковые автомобили <br>до 4 метров',
          tariffs: [
            'План минимум: <br>от 2 до 3 дней',
            'План базовый: <br>от 3 до 4 дней',
            'План премиум: <br>от 4 до 5 дней',
            'План премиум+: <br>от 5 до 6 дней',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
  .container {
    grid-column: 2/3;
    margin: 30px 0;
  }
  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 18px;
  }
  .card {
    padding: 10px 0;
    width: 100%;
    background: #FFFFFF;
    border-radius: 10px;
    display: grid;
    grid-template-columns: auto 240px auto;
    grid-template-rows: auto;
  }
  .image-wrapper {
    grid-column: 2/3;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-description {
    grid-column: 1/4;
    display: grid;
    height: 100px;
    grid-template-columns: auto 240px auto;
    background: #EFECF3;
    position: relative;
  }
  .card-description:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 100%;
    background: #FD7A00;
    opacity: 0.5;
  }
  .card-description-text {
    grid-column: 2/3;
    margin: 10px 0;
  }
  .card-tariffs {
    padding: 20px 0;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .card-text {
    margin: 0;
  }
  .card-button {
    grid-column: 2/3;
    padding: 15px;
  }
</style>