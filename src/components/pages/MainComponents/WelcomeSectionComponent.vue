<template>
  <div class="welcome">
    <h1 class="h h-1">Добро пожаловать в нашу мастерскую</h1>
    <div class="section">
      <div class="section-item section-item-1">
        <div class="section-item-1-text">
          <h1 class="h h-2 h-2-rewrite">О Нас</h1>
          <p class="h-4 text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.
            Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.
          </p>
        </div>
        <iframe width="660" height="360" src="https://www.youtube.com/embed/jNQXAC9IVRw" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <div class="section-item section-item-2">
        <h1 class="h h-2">Как мы работаем</h1>
        <div class="section-item-2-content">
          <div class="work-card">
            <img src="@/assets/icons/car-wash.svg" alt="Промывка днища и удаление коррозии">
            <p class="h-4">Промывка днища и<br> удаление коррозии </p>
          </div>
          <div class="work-card">
            <img src="@/assets/icons/painting.svg" alt="Нанесение антикоррозионных средств и покраска">
            <p class="h-4">Нанесение антикоррозионных<br> средств и покраска</p>
          </div>
          <div class="work-card">
            <img src="@/assets/icons/deal.svg" alt="Передача автомобиля вам">
            <p class="h-4">Передача автомобиля вам</p>
          </div>
        </div>
      </div>
      <div class="section-item section-item-3">
        <h1 class="h h-2">Тарифы</h1>
        <div class="section-item-3-content">
          <div class="section-item-3-selectors">
            <button class="section-item-select" v-for="(item, index) in plans" :key="index" :class="{active: item.active}"  @click="planChange(index) ">{{ item.name }}</button>
          </div>
          <div class="section-item-3-text">
            <p class="h-4" >{{ plans[activePlan].body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeSectionComponent",
  data() {
    return {
      plans: [
        {
          name: 'Эконом',
          body: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.\n' +
              'Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.',
          active: true,
        },
        {
          name: 'Базовый',
          body: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.\n' +
              'Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.',
          active: false,
        },
        {
          name: 'Премиум',
          body: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.\n' +
              'Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.',
          active: false,
        },
        {
          name: 'Премиум +',
          body: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.\n' +
              'Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.',
          active: false,
        }
      ],
      activePlan: 0,
    }
  },
  methods: {
    planChange(index) {
      this.plans[index].active = true;
      return this.activePlan = index;
    }
  }
}
</script>

<style scoped>
  .welcome {
    grid-column: 2/3;
    margin-top: 120px;
  }
  .section {
    background: #FFFFFF;
    border-radius: 10px 10px 0 0;
  }
  .section-item {
    padding: 10px 0;
    border-radius: 10px 10px 0px 0px;
  }
  .section-item-1 {
    height: 375px;
    display: flex;
    justify-content: space-between;
  }
  .h-2-rewrite {
    text-indent: 25px;
  }
  .section-item-1-text {
    padding: 10px 25px;
  }
  .text {
    width: 450px;
    font-size: 20px;
  }
  .section-item-2 {
    box-shadow: 0px -10px 0px rgba(0, 0, 0, 0.25);
  }
  .section-item-2-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .work-card {
    width: 360px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .work-card::after {
    content: '';
    background: url("@/assets/icons/arrow.svg") no-repeat;
    position: absolute;
    top: 25%;
    left: 360px;
    height: 100%;
    width: 100%;
  }
  .work-card:nth-last-child(1)::after{
    content: none;
  }
  .section-item-3 {
    box-shadow: 0px -10px 0px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .section-item-3-content {
    display: flex;
    flex-direction: row;
  }
  .section-item-3-text {
    margin: 30px 40px;
  }
  .section-item-3-selectors {
    display: flex;
    flex-direction: column;
    border-right: #2929A9 3px solid;
  }
  .section-item-select {
    height: 85px;
    width: 350px;
    font-size: 32px;
    font-family: "Roboto";
    border: none;
    background: #FFFFFF;
    transition: color .3s ease-in-out;
  }
  .section-item-select:hover {
    color: #2929A9;
  }
  .active {
    color: #2929A9;
  }
  .active::after {
    content: '-';
  }
</style>