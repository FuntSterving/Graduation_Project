<script setup>
// eslint-disable-next-line no-unused-vars
import RestaurantItem from '@/components/RestaurantItem.vue'
import { onMounted, watch } from 'vue'
import { useContent } from '@/composable/useContent'
import { useRouter } from 'vue-router'

const router = useRouter()

const { contentListRemake, getAllContent, contentList } = useContent()

onMounted(async () => {
  await getAllContent()
})

function goToRestaurantUrl(id) {
  router.push(`/restautant/${id}`)
}

watch(
  () => contentList.value,
  async () => {
    await getAllContent()
  }
)
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

:deep(.p-card) {
  transform: perspective(1000px) !important;
  position: relative !important;
}

:deep(.p-card):hover {
  animation: transform 1s ease-in-out !important;
  cursor: pointer;
  transform: scale(1.1) !important;
}

@keyframes transform {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
