<template>
  <div class="container">
    <h1 class="h h-2">Услуги</h1>
    <div class="cards">
      <div class="card" v-for="(item, index) in card_data" :key="index">
        <img :src="item.url.image" alt="Автомобиль" class="card-img">
        <div class="card-description">
          <p class="card-description-text"
             v-html="item.desc">
          </p>
        </div>
        <div class="card-tariffs" v-for="(tariff, i) in item.tariffs" :key="i">
          <p class="card-text"
             v-html="tariff">
          </p>
        </div>
        <callback-button-component class="card-button">Узнать цену</callback-button-component>
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
    gap: 25px;
  }
  .card {
    padding: 10px;
    width: 100%;
    background: #FFFFFF;
    display: grid;
    grid-template-columns: auto 240px auto;
    grid-template-rows: auto;
  }
  .card-img {
    grid-column: 2/3;
  }
  .card-description {
    grid-column: 1/4;
    display: grid;
    grid-template-columns: auto 240px auto;
  }
  .card-description-text {
    grid-column: 2/3;
  }
  .card-tariffs {
    grid-column: 2/3;
  }
  .card-button {
    grid-column: 2/3;
  }

</style>