<template>
    <div class="v-filter-string">

        {{filterName}}

        string choice!

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class FilterString extends Vue {

      @Prop({required: true, type: String}) filterName!: string

      minValue = 0

      maxValue = 0
    }
</script>

<style lang="scss" scoped>
    .v-filter-string {

    }
</style>
