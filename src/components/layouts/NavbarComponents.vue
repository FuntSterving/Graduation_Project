<template>
    <div class="side">
        <p-button v-if="!user" @click="googleRegister" label="Войти" icon="pi pi-sign-in" />

        <p-button v-else type="button" @click="googleLogout" label="Выйти" icon=" pi pi-sign-out" />

    </div>
</template>

<script setup>
import PButton from 'primevue/button';
import { useUser } from '@/composable/useUser'
const { user, googleRegister, googleLogout } = useUser()
</script>

<style  scoped>
.p-button{
    padding: 10px;
    margin: 10px;
}
</style>