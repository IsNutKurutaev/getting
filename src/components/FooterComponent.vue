<template>
  <div class="container" id="contacts">
    <div class="section">
      <div class="section-logo">
        <img src="@/assets/icons/logo-car.svg" alt="Пионер Авто">
        <a href=""><img src="@/assets/icons/telegram-logo.svg" alt="" class="socials"></a>
        <a href=""><img src="@/assets/icons/vk-logo.svg" alt="" class="socials"></a>
      </div>
      <div class="section-contacts">
        <div class="contact contact-1">
          <div>
            <img src="@/assets/icons/tel-icon.svg" alt="Контактный телефон" class="icon">
          </div>
          <div class="text">
            <h4>Контактный телефон</h4>
            <a href="tel:+79909909999"><p>+7 (990) 990-99-99</p></a>
          </div>
        </div>
        <div class="contact contact-2">
          <div>
            <img src="@/assets/icons/email-icon.svg" alt="Электронная почта" class="icon">
          </div>
          <div class="text">
            <h4>E-mail</h4>
            <p>info@exemple.ru</p>
          </div>
        </div>
        <div class="contact contact-3">
          <div>
            <img src="@/assets/icons/clock-icon.svg" alt="Часы работы" class="icon">
          </div>
          <div class="text">
            <h4>Часы работы</h4>
            <p>Понедельник - пятница с 8:00 до 17:00</p>
          </div>
        </div>
      </div>
      <div class="section-address">
          <div class="address">
            <h2>Адрес</h2>
            <p>г. Абакан ул. Новая 21</p>
          </div>
          <div class="map" style="position:relative;overflow:hidden;">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A177f67000635b059b2c637dbfbc54c3c36b726f7109d360c3b62776a5c899cfb&amp;source=constructor" width="600" height="250" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    <div class="copyright">
      <p>Аникоррозионная мастерскаая Пионер Авто</p>
    </div>
    </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
  .container {
    background: #2929A9;
    padding: 50px 0 0 0;
    grid-column: 1/4;
    display: grid;
    grid-template-columns: auto 1200px auto;
  }
  .section {
    padding: 0 0 25px 0;
    grid-column: 2/3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .section-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .section-contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
  .contact {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .icon {
    height: 45px;
    width: 45px;
  }
  .socials {
    height: 45px;
    width: 45px;
  }
  a {
    text-decoration: none;
  }
  p, h4, h2 {
    font-family: Roboto;
    font-weight: 500;
    color: #FFFFFF;
    margin: 0;
  }
  h4 {
    font-size: 20px;
    color: #FD7A00;
  }
  .section-address {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .address {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .copyright {
    grid-column: 1/4;
    border-top: black 1px solid;
  }
  .copyright p {
    margin: 5px;
  }
</style>