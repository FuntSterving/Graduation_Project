<script setup>
// eslint-disable-next-line no-unused-vars
import RestaurantItem from '@/components/RestaurantItem.vue'
import { onMounted } from 'vue'
import { useContent } from '@/composable/useContent'
import { useRouter } from 'vue-router'

const router = useRouter()

const { contentListRemake, getAllContent } = useContent()

onMounted(async () => {
  await getAllContent()
})

function goToRestaurantUrl(id) {
  router.push(`/restaurant/${id}`)
}

// watch(
//   () => contentList.value,
//   async () => {
//     await getAllContent()
//   }
// )
</script>

<template>
  <template v-if="contentListRemake">
    <section class="flexTemplate">
      <section class="cars" v-for="content in contentListRemake" :key="content">
        <RestaurantItem :content="content" @click="goToRestaurantUrl(content.id)" />
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

