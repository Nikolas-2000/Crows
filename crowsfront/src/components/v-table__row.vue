<template>
  <div class="fone">
    <div class="v-table__row">
        <div class="row row__name">{{row__data.name}}</div>
        <div class="row row__number">{{row__data.number}}</div>
        <div class="row row__point">{{row__data.point}}</div>
        <div class="row row__tome">{{row__data.time}}</div>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        row__data: {
            type: Object,
            defaules: () => {
                return {}
            }
        }
    }
}
</script>

<style scoped>
  .fone{
    background-color: white;
  }
  .v-table__row{
      display: flex;
      justify-content: space-around;
  }
  .row{
    text-align: left;
    padding: 8px 18px;
    flex-basis: 25%;
    border: solid 1px black;
  }
</style>>


