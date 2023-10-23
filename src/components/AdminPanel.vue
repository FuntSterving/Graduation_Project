<script setup>
// eslint-disable-next-line no-unused-vars
import { ref, computed } from "vue";
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import { useContent } from '@/composable/useContent';
import FileUpload from 'primevue/fileupload';
import InputText from "primevue/inputtext";


// eslint-disable-next-line no-unused-vars, no-undef
const { newContent, addContent, loading, clear, uploadImage } = useContent()

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
    { cuisine: 'Итальянская' },
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
</script>
<template>
    <Button icon="pi pi-plus" @click="toggleVisible" />
    <Dialog v-model:visible="visible" maximizable modal header="Добавить новое заведение" :style="{ width: '50vw' }">
        <template #default>
            <div class="p-fluid">
                <div class="p-field cont">
                    <label for="brand">Бренд</label>
                    <InputText id="brand" v-model="newContent.brand" placeholder="Наименование бренда" locale="ru-ru" />
                </div>

                <div class="p-field cont">
                    <label for="location">Расположение</label>
                    <InputText id="location" v-model="newContent.location" placeholder="Укажите адрес город/улица/дом"
                        locale="ru-ru" />

                </div>

                <div class="p-field cont">
                    <label for="typeOfCuisine">Тип кухни</label>

                    <Dropdown id="typeOfCuisine" v-model="newContent.typeOfCuisine" editable :options="typeOfCuisine"
                        option-label="cuisine" option-value="cuisine" placeholder="Тип кухни" />

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
                    <FileUpload mode="basic" id="photo" accept="image/*" @input="onUpload($event)" />
                </div>

            </div>
        </template>
        <template #footer>
            <Button label="Сбросить" icon="pi pi-times" @click="clearContent" text />
            <Button label="Добавить" icon="pi pi-check" @click="createContetn" autofocus />
        </template>


    </Dialog>
</template>
<style scoped>
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
</style>