<template>
  <div class="welcome" id="about">
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
      <div class="section-item section-item-2" id="process">
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
            <button class="section-item-select"
                    v-for="(item, index) in plans"
                    :key="index"
                    ref="button"
                    @click="planChange(index) ">{{ item.name }}
            </button>
            <img src="@/assets/icons/selection.svg" class="cursor" ref="cursor">
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
        },
        {
          name: 'Базовый',
          body: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.\n' +
              'Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.',
        },
        {
          name: 'Премиум',
          body: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.\n' +
              'Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.',
        },
        {
          name: 'Премиум +',
          body: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tempus sem, et sodales nunc.\n' +
              'Quisque hendrerit, tellus quis vulputate ultricies, lectus erat faucibus erat, nec sollicitudin nisi leo eget neque.',
        }
      ],
      activePlan: 0,
    }
  },
  methods: {
    moveCursor(offset) {
      this.$refs.cursor.style.transform = 'translateY(' + offset + 'px)';
      return true;
    },
    getItemOffset(item) {
      return item.offsetTop + 25;
    },
    planChange(index) {
      const buttons = this.$refs.button;
      this.activePlan = index;
      buttons.forEach((value) => {value.classList.remove('active')})
      buttons[this.activePlan].classList.add('active');
      const offset = this.getItemOffset(buttons[this.activePlan]);
      this.moveCursor(offset);
      return true;
    }
  },
  mounted() {
    this.$refs.button[this.activePlan].classList.add('active');
    this.moveCursor(25);
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
    border-radius: 10px;
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
    font-size: 16px;
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
    position: relative;
  }
  .section-item-select {
    height: 85px;
    width: 350px;
    font-size: 26px;
    font-weight: 500;
    font-family: "Roboto";
    border: none;
    background: #FFFFFF;
    transition: .3s ease-in-out;
  }
  .section-item-select:hover {
    color: #2929A9;
    font-size: 30px;
  }
  .active {
    color: #2929A9;
    font-size: 30px;
    position: relative;
    transition: 5s ease-in-out;
  }
  .cursor {
    position: absolute;
    right: -13px;
    top: 1px;
    transition: .5s cubic-bezier(.25, .25, .25, 1.25);
  }
</style>