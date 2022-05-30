<template>
  <div class="mainBack">
    <div class="getDate">Текущее дата и время : {{this.getTime}}</div>
    <div class="pickerBack">Календарь :
      <Datepicker
        class="datePucker"
        v-model="pickedDate"
        :clearable="true"
        :data-translated="true"
      />
    </div>
    <div class="infoBack">
      <div class="info">О разработчике и о программе : --------Контакты : +8-555-555-55-55 (Македонян Греческий)
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'

export default {
  components: {
    Datepicker
  },
  data(){
    return{
      pickedDate: new Date(),
      getTime: new Date().toLocaleString(),
    }
  }
}

</script>

<style>
  .getDate{
    margin: 20px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: black;
  }
  .pickerBack{
    display: flex;
    justify-content: center;
  }
  .datePucker{
    border: 2px solid black;
    border-radius: 15px;
    margin-left: 10px;
  }
  .mainBack{
    background-color: rgb(255, 255, 255);
    border: 2px solid black;
    border-radius: 15px;
  }
  .info{
    background: rgb(160, 157, 157);
    height: 200px;
    width: 400px;
    font-size: 20px;
    padding: 20px;
    margin: 20px;
    border: 1px solid rgb(160, 157, 157);
    border-radius: 15px;
  }
  .infoBack{
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
    margin-top: 5rem;
  }
</style>
