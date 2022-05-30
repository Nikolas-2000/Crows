<template>
    <div class="BackImage">
      <img class="image" :src="require('/src/image/'+this.image__data+'.jpg')"/>
      <div>Рекламный банер №{{this.image__data}}</div>
    </div>
</template>

<script>

export default {
    props: {
        image__data: {
            type: Number,
            defaules: () => {
                return {}
            }
        }
    }
}

</script>

<style>

</style>>