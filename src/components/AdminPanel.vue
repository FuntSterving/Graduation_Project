<script setup>
import Button from 'primevue/button';
// eslint-disable-next-line no-unused-vars
import { ref, computed } from "vue";
import Dialog from 'primevue/dialog';


const visible = ref(false);
const toggleVisible = () => {
    visible.value = !visible.value
}
</script>
<template>
    <Button icon="pi pi-plus" @click="toggleVisible"/>
    <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50vw' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>
</template>
<style scoped></style>