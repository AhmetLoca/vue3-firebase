<template>
 <div>
  <h3>{{title}}</h3>
  <input type="text" ref="isim"/>
  <input type="text" ref="parola"/>
  <button @click="handleClick">Tıkla</button>
  <br>
  {{sonuc}}
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      title:'Hi Vue CLI',
      sonuc:''
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.isim.value)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
