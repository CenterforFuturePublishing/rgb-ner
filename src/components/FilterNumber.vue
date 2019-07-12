<template>
    <div class="v-filter-number">

        {{filterName}}

        <label>minimum value
            <input type="number" v-model="minValue">
        </label>

        <label>maximum
            <input type="number" v-model="maxValue">
        </label>

    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";

    @Component
    export default class FilterNumber extends Vue {

      @Prop({required: true, type: String}) filterName!: string

      minValue = 0

      maxValue = 0
    }
</script>

<style lang="scss" scoped>
    .v-filter-number {

    }
</style>
