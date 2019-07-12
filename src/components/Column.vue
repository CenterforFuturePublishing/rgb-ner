<template>
    <section class="v-column">

        <button @click="addFilter">add filter</button>

        <div class="v-column__image-container">

            <img v-for="imageLink of $arrayOfImageLink"
                 :key="imageLink.id"
                 :src="imageLink"
                 alt="empty"
                 class="v-column__image">

        </div>

        <slot></slot>

    </section>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";
  import {IRootState} from "@/store"
  import FilterNumber from "@/components/FilterNumber.vue"

  @Component({
    components: {FilterNumber}
  })
  export default class Column extends Vue {



    get $jpegData() {

      const rootState = this.$store.state as IRootState
      return rootState.jpegData

    }

    get $arrayOfImageLink(): string[] {

      const arrayToReturn: string[] = []

      if (this.$jpegData) {

        for (const imageName in this.$jpegData) {

          const imageData = this.$jpegData[imageName]
          arrayToReturn.push(imageData.jpgLink)

        }

      }

      return arrayToReturn

    }

    // function sample
    addFilter() {

      console.log("add filter")

    }
  }
</script>

<style lang="scss" scoped>
    .v-column {
        box-sizing: border-box;
        background: lightgrey;
        border: solid 1px grey;
        width: 40em;
        height: 100%;
        overflow: scroll;
        padding: 3rem;
    }

    .v-column__image-container {
        box-sizing: border-box;
        width: 100%;
    }

    .v-column__image {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: auto;

        & + & {
            margin-top: 2rem;
        }
    }
</style>