<script setup>
import { RouterView } from 'vue-router'
import NavbarComponents from './components/layouts/NavbarComponents.vue';
import FooterComponents from './components/FooterComponents.vue'
import AdminPanel from './components/AdminPanel.vue'
import { useUser } from '@/composable/useUser'
import { onMounted } from 'vue'

onMounted(() => {
  getUserFromLocalStorage()
})

const { user, getUserFromLocalStorage } = useUser()

</script>

<template>
  <template v-if="user?.status === 'admin'">
    <AdminPanel />
  </template>
  <NavbarComponents />
  <RouterView />
  <FooterComponents />
</template>

<style scoped></style>
