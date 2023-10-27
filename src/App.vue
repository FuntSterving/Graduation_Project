<script setup>
import { RouterView } from 'vue-router'
import NavbarComponents from './components/layouts/NavbarComponents.vue';
import FooterComponents from './components/FooterComponents.vue'
import { useUser } from '@/composable/useUser'
import { onMounted } from 'vue'

onMounted(() => {
  getUserFromLocalStorage()
})

const { getUserFromLocalStorage } = useUser()

</script>

<template>
  <NavbarComponents />
  <RouterView />
  <FooterComponents />
</template>

<style scoped></style>
