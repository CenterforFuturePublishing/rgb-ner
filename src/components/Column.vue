<template>
    <section class="v-column">

        <div class="v-column__filter-container">
            <label>filter type
                <select v-model="filterNameToAddSelected">

                    <option>select an effect to added</option>

                    <option v-for="(FilterType, filterName) of $listOfAllFilterOption">
                        {{filterName}}
                    </option>

                </select>
            </label>

            <button @click="addFilter" :disabled="anyFilterAreSelected">add filter</button>
        </div>

        <div class="v-column__filter-container">
            <template v-for="filter of arrayOfFilterActivated">

                <filter-number  v-if="filter.type === 'number parameter'" :filterName="filter.name"></filter-number>
                <filter-string  v-if="filter.type === 'string parameter'" :filterName="filter.name"></filter-string>

            </template>
        </div>

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
  import {Component, Vue} from "vue-property-decorator";
  import {IRootState} from "@/store"
  import FilterNumber from "@/components/FilterNumber.vue"
  import {FilterType, IFilterOption, IJpgMetadata, ListOfJpgMetadata} from "@/api"
  import FilterString from "@/components/FilterString.vue"

  @Component({
    components: {FilterString, FilterNumber}
  })
  export default class Column extends Vue {

    get $listOfJpgMetadata(): ListOfJpgMetadata {

      const listOfJpegMetadata: ListOfJpgMetadata = {}

      for (const jpgName in this.$jpegData) {

        listOfJpegMetadata[jpgName] = this.$jpegData[jpgName].metadata
      }

      return listOfJpegMetadata
    }

    get $listOfAllFilterOption(): IFilterOption {

      const listOfFilterToReturn: IFilterOption = {}

      for (const jpgName in this.$listOfJpgMetadata) {

        const jpgMetadata = this.$listOfJpgMetadata[jpgName]

        for (const parameterName in jpgMetadata) {

          if(jpgMetadata.hasOwnProperty(parameterName)) {

            const parameterValue = jpgMetadata[parameterName]

            listOfFilterToReturn[parameterName] = (Array.isArray(parameterValue)) ? "string parameter" : "number parameter"

          }
        }
      }

      return listOfFilterToReturn
    }

    get $jpegData() {

      const rootState = this.$store.state as IRootState
      return rootState.jpegData
    }

    get $arrayOfImageLink(): string[] {

      const arrayToReturn: string[] = []

      for (const jpgName in this.$jpegData) {

        const jpgMetadata = this.$jpegData[jpgName]
        arrayToReturn.push(jpgMetadata.jpgLink)

      }

      return arrayToReturn
    }

    arrayOfFilterActivated: {name: string, type: FilterType}[] = []

    filterNameToAddSelected: string | "select an effect to added" = "select an effect to added"

    get anyFilterAreSelected() {return this.filterNameToAddSelected === "select an effect to added"}

    addFilter() {
      console.log("add filter")
      

      if( ! this.anyFilterAreSelected) {
        this.arrayOfFilterActivated.push({
          name: this.filterNameToAddSelected,
          type: this.$listOfAllFilterOption[this.filterNameToAddSelected]
        })

      }

      this.filterNameToAddSelected = "select an effect to added"
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