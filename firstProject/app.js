const app = Vue.createApp({
  template: `
    <h2>İçecek Seçiniz</h2>
      <ul>
        <li v-for="icecek in icecekler"
          class="li"
          :class="{secilen}"
          @click="icecekSec(icecek)">
         {{icecek.isim}}
        </li>
      </ul>
      
      <button @click="yazdir()">Secilen içecekleri yazdir</button>

      <hr>

      <h3>Secilen İcecekler</h3>
      <ul>
        <li v-for="secilen in secilenIcecekler" class="green">
          {{secilen.isim}}
        </li>
      </ul>
  `,

  data() {
    return {
      icecekler: [
        { isim: "Su", sec: false },
        { isim: "Ayran", sec: false }
      ]
    }
  },
  methods: {
    icecekSec(icecek) {
      icecek.sec = !icecek.sec;
    },
    yazdir() {
      const secilenler = this.icecekler.filter(i => i.sec == true)
      console.log(secilenler);
    }
  },
  computed: {
    secilenIcecekler() {
      return this.icecekler.filter(i => i.sec)
    }
  }
});

app.mount('#app');