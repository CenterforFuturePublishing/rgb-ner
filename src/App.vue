<template>
  <div id="app">


    <column :textFromParent="textForChildComponent">

      <h4>html from parent</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem et harum, hic, illo ipsam iure, libero officia possimus quae quam quo recusandae sed unde voluptate. Asperiores non reprehenderit soluta.</p>

    </column>



  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Column from "@/components/Column.vue"

@Component({
  components: {
    Column,
  },
})
export default class App extends Vue {
  textForChildComponent = 'hello from parrent component'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
