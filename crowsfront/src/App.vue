<template>
  <div class="topStripe">
    <div style="flex:1">
      <router-link tag="one" to="/" class="StripeButton">Главная</router-link>
    </div>
    <div style="flex:1">
      <router-link tag="one" to="/base" class="StripeButton">Рекламные блоки</router-link>
    </div>
    <div style="flex:1">  
      <router-link tag="one" to="/image" class="StripeButton">База даных</router-link>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>

export default {
}
</script>

<style>
html {
  background-image: url(./image/background.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
  .topStripe{
    background-color: white;
    border-radius: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
    text-align: center;
    display: flex;
    border: 2px solid rgb(0, 0, 0);
    margin-bottom: 1rem;
  }
  .StripeButton{
    border: solid 2px rgb(0, 0, 0);
    background: rgb(203, 206, 41);
    color: black;
    text-decoration: none;
    padding: 5px;
    border-radius: 15px;

  }
  .StripeButton:hover{
    background-color: rgb(173, 175, 35);
  }













  /*.topStripe{
    background-color: rgb(206, 206, 206);
    text-align: center;
    display: flex;
    border-radius: 15px;
  }
  .StripeButton{
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 15rem;
    margin-right: 15rem;
    flex:1;
    background-color: rgb(122, 122, 131);
    color: rgb(255, 255, 255);
    border-radius: 15px;
    text-decoration: none;
  }
  .StripeButton:hover{
    background-color: rgb(102, 102, 102) ;
  }*/
</style>
