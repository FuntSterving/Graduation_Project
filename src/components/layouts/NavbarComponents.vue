<script setup>
import PButton from 'primevue/button';
import { useUser } from '@/composable/useUser'
import { ref } from "vue";
import Menubar from 'primevue/menubar';

import { useRouter } from 'vue-router';

const router = useRouter();

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import { UseContent } from '@/composable/useContent';
import FileUpload from 'primevue/fileupload';
import InputText from "primevue/inputtext";

const { user, googleRegister, googleLogout, } = useUser()


const { newContent, addContent, clear, uploadImage } = UseContent()

async function createContetn() {
    await addContent()
    toggleVisible()
}

async function onUpload(e) {
    const image = e.target.files[0]
    await uploadImage(image)
}


function clearContent() {
    clear()
    toggleVisible()
}

const visible = ref(false);
const toggleVisible = () => {
    visible.value = !visible.value
}

const typeOfCuisine = [
    { cuisine: 'Европейская' },
    { cuisine: 'Итальянская' },
    { cuisine: 'Грузинская' },
    { cuisine: 'Французская кухня' },
    { cuisine: 'Испанская кухня' },
    { cuisine: 'Мексиканская кухня' },
    { cuisine: 'Японская кухня' },
    { cuisine: 'Китайская кухня' },
    { cuisine: 'Тайская кухня' },
    { cuisine: 'Индийская кухня' },
    { cuisine: 'Греческая кухня' },
    { cuisine: 'Турецкая кухня' },
    { cuisine: 'Американская кухня' },
    { cuisine: 'Бразильская кухня ' },
]
const workingHours = [
    { hours: '07:00-21:00' },
    { hours: '08:00-21:00' },
    { hours: '10:00-24:00' },
    { hours: '11:00-01:00' },
    { hours: '12:00-02:00' },
    { hours: '12:00-03:00' },
    { hours: '24/7' },

]

const items = ref([
    {
        label: 'Главная',
        icon: 'pi pi-fw pi-home',
        route: '/home',

    },
    {
        label: 'Галерея',
        icon: 'pi pi-map',
        route: '/restaurants',

    },
    {
        label: 'События',
        icon: 'pi pi-fw pi-calendar',
        route: '/events',

    },

    {
        label: 'Избранное',
        icon: 'pi pi-heart',
        route: '/favorites',
    }
]);

function setCursorPointer() {
    document.body.style.cursor = 'pointer';
}

function resetCursor() {
    document.body.style.cursor = 'default';
}

function navigateToHome() {
    router.push({ path: '/home' });
}

</script>



<template>
    <div class="navbarTopImgContainer">
        <div class="navbarTopImg">
        </div>
    </div>
    <Menubar :model="items">
        <template #start>
            <router-link :to="'/home'" custom>
                <img alt="logo" src="@/assets/RestaurantGallery_logo_.png" height="50" class="mr-2"
                    @mouseover="setCursorPointer" @mouseleave="resetCursor" @click="navigateToHome" />
            </router-link>
        </template>
        <template #item="{ label, item, props }">
            <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </router-link>
        </template>
        <template #end>

            <Button v-if="user?.status === 'admin'" icon="pi pi-plus" label="Admin panel" @click="toggleVisible"
                class="adminBtn" />
            <Dialog v-model:visible="visible" maximizable modal header="Добавить новое заведение"
                :style="{ width: '50vw' }">
                <template #default>
                    <div class="p-fluid">
                        <div class="p-field cont">
                            <label for="brand">Бренд</label>
                            <InputText id="brand" v-model="newContent.brand" placeholder="Наименование бренда"
                                locale="ru-ru" />
                        </div>

                        <div class="p-field cont">
                            <label for="location">Расположение</label>
                            <InputText id="location" v-model="newContent.location"
                                placeholder="Укажите адрес город/улица/дом" locale="ru-ru" />

                        </div>

                        <div class="p-field cont">
                            <label for="typeOfCuisine">Тип кухни</label>

                            <Dropdown id="typeOfCuisine" v-model="newContent.typeOfCuisine" editable
                                :options="typeOfCuisine" option-label="cuisine" option-value="cuisine"
                                placeholder="Тип кухни" />

                        </div>

                        <div class="p-field cont">
                            <label for="workingHours">Время работы</label>

                            <Dropdown id="workingHours" v-model="newContent.workingHours" editable :options="workingHours"
                                option-label="hours" option-value="hours" placeholder="Время работы" />

                        </div>

                        <div class="p-field cont">
                            <label for="description">Описание</label>
                            <InputText id="description" v-model="newContent.description" placeholder="Укажите описание"
                                locale="ru-ru" />

                        </div>


                        <div class="p-field cont">
                            <!-- Slider -->
                            <label for="numberOfSeats">Количество посадочных мест</label>
                            <div class="slider-cont">
                                <Slider id="numberOfSeats" v-model="newContent.numberOfSeats" :min="0" :max="200" :step="10"
                                    class="w-14rem" style="margin-top: 7px;" />
                            </div>
                        </div>

                        <div class="p-field cont">
                            <label for="childrensMenu">Детское меню</label>
                            <!-- RadioButton -->
                            <div class="radio-button-group">
                                <RadioButton id="childrensMenu" v-model="newContent.childrensMenu" inputId="childrensMenu1"
                                    name="childrensMenu" value="Есть детское меню" />
                                <label for="childrensMenu1" class="ml-2">Есть детское меню</label>

                                <RadioButton id="childrensMenu" v-model="newContent.childrensMenu" inputId="childrensMenu2"
                                    name="childrensMenu" value="Нет детское меню" style="margin-left: 15px;" />
                                <label for="childrensMenu2" class="ml-2">Нет детское меню</label>
                            </div>
                        </div>

                        <div class="p-field cont">
                            <label for="delivery">Доставка</label>
                            <!-- RadioButton -->
                            <div class="radio-button-group">
                                <RadioButton id="delivery" v-model="newContent.delivery" inputId="delivery1" name="delivery"
                                    value="Есть доставка" />
                                <label for="delivery1" class="ml-2">Есть доставка</label>

                                <RadioButton id="delivery" v-model="newContent.delivery" inputId="delivery2" name="delivery"
                                    value="Нет доставки" style="margin-left: 15px;" />
                                <label for="delivery2" class="ml-2">Нет доставки</label>
                            </div>
                        </div>



                        <div class="p-field">
                            <label for="photo">Фото</label>
                            <FileUpload mode="basic" style="background: #522f45" id="photo" accept="image/*"
                                @input="onUpload($event)" />
                        </div>

                    </div>
                </template>
                <template #footer>
                    <Button label="Сбросить" icon="pi pi-times" @click="clearContent" text />
                    <Button label="Добавить" icon="pi pi-check" :disabled="!newContent.image" @click="createContetn"
                        autofocus />
                </template>

            </Dialog>

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
    background-color: #522f45;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
}

.navbarTopImg {
    background-image: url('@/assets/RestaurantGallery_FullLogo.png');
    background-size: cover;
    background-position: center;
    height: 150px;
    width: 150px;
    animation: rotateAndScale 4s both;
}


@keyframes rotateAndScale {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2) rotateY(180deg);
    }

    100% {
        transform: scale(1);
    }
}


.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 1.00);
    text-decoration: none !important;
}
:deep(.p-card) {
    cursor: pointer;
    transform: scale(1.03) !important;
  }

.p-menubar .p-menubar-root-list>.p-menuitem>.p-menuitem-content .p-menuitem-link .p-menuitem-text:hover {
    color: #eb7fc5;
}

.p-menubar {
    background-color: #3c3d41;
    border-top: solid 1px rgba(255, 255, 255, 0.10);
}

.pi {
    color: rgba(255, 255, 255, 1.00);
}

.pi-fw {
    color: rgba(255, 255, 255, 1.00);
}


.p-menubar .p-menuitem-link:hover {
    background-color: #24111d;
    border-radius: 10px;
}

.p-menuitem-link {
    border: 1px solid #883cae;
    border-radius: 4px;
    margin: 0px 10px 0px 10px;
}

/*.navbarTopImg:hover {
    animation: rotateAndScale 4s both;
} */

.p-button {
    background: #3c3d41;
    color: white;
    border-radius: 4px;
}

.p-button:hover {
    background-color: #24111d;
    color: #eb7fc5;
    border-radius: 10px;
}


.p-field {
    margin-bottom: 20px;
}

.p-field label {
    margin-bottom: 5px;
}

label {
    display: block;
    font-weight: bold;

}

.p-dropdown {
    width: 100%;

}

.p-inputnumber {
    width: 100%;

}


.p-calendar {
    width: 100%;

}

/* Стили для ColorPicker */
.p-colorpicker {
    width: 100%;
    margin-top: 5px;
    border: 1px solid #d3dbe3;

    color: #043d75;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #d3dbe3;

    border-radius: 6px;

}


.radio-button-group {
    display: flex;
    align-items: center;
    margin-top: 15px;
    border: 1px solid #d3dbe3;

    color: #043d75;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #d3dbe3;

    border-radius: 6px;
}

.radio-button-group label {
    margin-left: 10px;
    /* Отступ между радиокнопками и метками */
}


.p-field label[for="travel"] {
    margin-bottom: 10px;

}

.slider-cont {
    width: 100%;
    height: 45px;
    border: 1px solid #d3dbe3;
    color: #043d75;
    background: #ffffff;
    padding: 0.75rem 0.75rem;
    border: 1px solid #d3dbe3;

    border-radius: 6px;
}
a{
    text-decoration: none;
}
</style>