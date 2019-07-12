<template>
  <div id="app">

    <main class="v-container">

      <column>  <p>HULK</p>  </column>

    </main>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Column from "@/components/Column.vue"

@Component({
  components: {
    Column,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 10rem 2rem 2rem;
  }

  .v-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
  }

</style>
