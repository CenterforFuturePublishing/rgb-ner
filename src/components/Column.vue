<template>
    <section class="v-column">
        <button @click="buttonClicked">click</button>
        <p>{{counter}}</p>
    </section>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class Column extends Vue {

      counter = 0

      buttonClicked() {
        this.counter ++
      }
    }
</script>

<style lang="scss" scoped>
    .v-column {

    }
</style>