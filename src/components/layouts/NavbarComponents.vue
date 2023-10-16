<script setup>
import PButton from 'primevue/button';
import { useUser } from '@/composable/useUser'
const { user, googleRegister, googleLogout } = useUser()
import { ref } from "vue";
import Menubar from 'primevue/menubar';
// import InputText from 'primevue/inputtext';


const items = ref([
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',

    },
    {
        label: 'Войти',
        icon: 'pi pi-fw pi-user',
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',

    },
    {
        label: 'Upload',
        icon: 'pi pi-fw pi-upload',
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);


</script>



<template>
    <div class="navbarTopImgContainer">

        <div class="navbarTopImg">
        </div>
    </div>
    <Menubar :model="items">
        <template #start>
            <!-- <img alt="logo" src="@/assets/RestaurantGallery_logo_.png" height="50" class="mr-2" /> -->
        </template>
        <template #content="{ label, item, props, }">
            <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                <a :href="routerProps.href" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </router-link>
        
        </template>
        <template #end>

            <p-button v-if="!user" @click="googleRegister" label="Войти" icon="pi pi-sign-in" />

            <p-button v-else type="button" @click="googleLogout" label="Выйти" icon=" pi pi-sign-out" />


        </template>
    </Menubar>
</template>

<style  scoped>
.p-button {
    padding: 10px;
    margin: 10px;
}
.navbarTopImgContainer {
    background-color:  #522f45;
    

    display: flex;
    align-items: center; /* Выравнивание по вертикали по центру */
    justify-content: center; /* Выравнивание по горизонтали по центру */
    height: 150px; /* Высота контейнера */
}
.navbarTopImg {
    background-image: url('@/assets/RestaurantGallery_FullLogo.png');
    background-size: cover;
    background-position: center; /* Изображение будет в центре контейнера */
    height: 150px;
    width: 150px;
    /* Другие стили по вашему усмотрению */
}

.p-button{
    background: #49243b;
}
.p-button:hover{
    background-color: #24111d;;
    color: #eb7fc5;
}
</style>