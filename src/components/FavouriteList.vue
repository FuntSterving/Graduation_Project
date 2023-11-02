<script setup>
// eslint-disable-next-line no-unused-vars
import FavouriteItem from '@/components/FavouriteItem.vue'
import { useContent } from '@/composable/useContent'


const { favListRemake } = useContent()



</script>

<template>
  <template v-if="favListRemake">
    <section class="flexTemplate">
      <section class="cars" v-for="favContent in favListRemake" :key="favContent">
        <FavouriteItem :favContent="favContent" />
      </section>
    </section>
  </template>
  <template v-else> loading... </template>
</template>

<style scoped>
.flexTemplate {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

:deep(.p-card):hover {
  cursor: pointer;
  transform: scale(1.03) !important;
}
</style>

