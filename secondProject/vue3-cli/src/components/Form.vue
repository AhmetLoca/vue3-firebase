<template>
<form>
  <label>Hobiler</label>
  <input type="text" v-model="aktifHobi" @keyup="hobiEkle">

  <div v-for="hobi in hobiler" :key="hobi">
      {{hobi}}
  </div>

</form>
</template>

<script>
export default {
  data(){
    return{
     hobiler:[],
     aktifHobi:''
    }
  },
  methods:{
    hobiEkle(){
          this.hobiler.push(this.aktifHobi)
    }
  }
}
</script>

<style>
</style>