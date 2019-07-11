<template>
    <section class="v-column">

        <h3>action sample</h3>
        <button @click="buttonClicked">click</button>

        <p>button clicked {{counter}}</p>

        <h3>variable sample</h3>
        <p>text from parent: {{textFromParent}}</p>

        <h3>html from parent with slot vue element:</h3>
        <slot></slot>

    </section>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class Column extends Vue {

      // property sample
      @Prop({default: "default text"}) textFromParent!: string

      // variable sample
      counter = 0

      // function sample
      buttonClicked() {
        this.counter ++
        let number = 0
      }
    }
</script>

<style lang="scss" scoped>
    .v-column {

    }
</style>