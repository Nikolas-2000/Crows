<template>
    <div class="outher">
      <div class="background">
          <vImage 
                  v-for="row in pagenUsers"
                  :key="row"
                  :image__data="row"
          ></vImage> 
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
  <div></div>
</template>

<script>
import vImage from "./v-image.vue";
import {mapActions, mapGetters} from 'vuex';

export default {
  components:{
    vImage
  },
  data() {
    return {
      pageNumber: 1,
      userPerPages: 4,
    }
  },
  methods:{
    pegeClick(page){
      this.pageNumber = page
    },
  },
  computed: {
    pages() {
      return Math.ceil(this.IMAGE.length / 4)
    },
    pagenUsers(){
      let from = (this.pageNumber - 1) * this.userPerPages;
      let to = from + this.userPerPages;
      return this.IMAGE.slice(from,to)
    },
    ...mapGetters([
      'IMAGE',
    ]),
    ...mapActions([
      'GET_PATH_IMAGE',
    ]),
  },
  mounted(){
    this.GET_PATH_IMAGE;
  },
}

</script>

<style>
  .image{
    height:200px; 
    width:200px;
  }
  .background{
    display: flex;
    justify-content: center;
  }
  .outher{
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
    border-radius: 15px;
  }
    .BackImage{
    margin: 40px;
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
</style>>