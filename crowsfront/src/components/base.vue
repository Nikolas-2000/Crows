<template>
  <div class="fone">
    <div class="v-table">
      <div class="v-table__header">
        <p style="text-align:center">Name</p>
        <p style="text-align:center">Number</p>
        <p style="text-align:center">Point</p>
        <p style="text-align:center">Time</p>
      </div>
      <div class="v-table__body">
        <vTebleRow 
          v-for="row in pagenUsers"
          :key="row"
          :row__data="row"
          ></vTebleRow>  
      </div>
      <div class="v-table__pagin">
        <div class="page" 
          v-for="page in pages"
          :key="page"
          :class="{'page__selected': page === pageNumber}"
          @click="pegeClick(page)"
          >
          {{page}}
        </div>
      </div>
    </div>
  </div>
  <div class="search">
    <div>
      <div>Поиск по номеру телефона:</div>
      <input type="text" name="key" placeholder="Введите номер телефона">
      <button @click="getNumber()">Поиск</button>
    </div>
    <div>
      <div>
        Результат:
        <div>Имя : {{this.nameUser}}</div>
        <div>Количество очков : {{this.point}}</div>
        <div>Время регистрации : {{this.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import vTebleRow from "./v-table__row.vue";

export default {
  components:{
    vTebleRow
  },
  data() {
    return {
      userPerPages: 10,
      pageNumber: 1,
      nameUser: 'Не найденно',
      point: 'Не найденно',
      time: 'Не найденно',
    }
  },
  computed: {
    ...mapGetters([
      'NAME_API',
    ]),
    pages() {
      return Math.ceil(this.NAME_API.length / 10)
    },
    pagenUsers(){
      let from = (this.pageNumber - 1) * this.userPerPages;
      let to = from + this.userPerPages;
      return this.NAME_API.slice(from,to)
    }
  },
  methods: {
    getNumber(){
      let input = document.querySelector('input')
      for(let i = 0; i < this.NAME_API.length ; i++){
        if(this.NAME_API[i].number == input.value){
          this.nameUser = this.NAME_API[i].name;
          this.point = this.NAME_API[i].point;
          this.time = this.NAME_API[i].time;
          break;
        } 
          this.nameUser = 'Не найденно';
          this.point = 'Не найденно';
          this.time = 'Не найденно';
      }
      // let input = document.querySelector('input')
      // this.numberUsers.number = input.value;
    },
    ...mapActions([
      'GET_NAME_API',
    ]),
    pegeClick(page){
      this.pageNumber = page
    },
  },
  mounted(){
    this.GET_NAME_API();
  },
  watch: {
    
  }
}
</script>

<style>
  .search{
    text-align: center;
    background-color: rgb(228, 228, 228);
    padding: 40px;
  }
  .fone{
    background-color: rgb(228, 228, 228);
  }
  .v-table{
    max-width: 900px;
    margin: 0 auto;
  }
  .v-table__header{
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px black;
  }
  .v-table__header p{
    flex-basis: 25%;
    text-align: left;
  }
  .v-table__pagin{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
  }
  .page{
    padding: 8px;
    border: solid 1px black;
    color: black;
    background-color: white;
    margin-right: 10px;
    margin-bottom: 16px;
  }
  .page:hover{
    background-color: gray;
    cursor: pointer;
  }
  .page__selected{
    background-color: rgba(156, 109, 109, 0.705);
    color: rgb(255, 255, 255);
  }
</style>

