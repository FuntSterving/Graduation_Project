<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

import { useUser } from '../composable/useUser';

const { deleteFavouriteItem } = useUser()

defineProps({
    favContent: {
        type: Object,
        required: true,
    },

})

</script>



<template>
    <Card style="width: 20em; margin-top: 3em;" class="card">
        <template #header>
            <div class="car-image">
                <img :src="favContent.image" alt="" class="car-image-inner">
            </div>
        </template>

        <template #title>
            <div class="car-title">{{ favContent.brand }}</div>
        </template>


        <template #content>
            <div class="car-details">
                <p> {{ favContent.location }}</p>
            </div>
        </template>
        <template #footer>
            <Button @click="deleteFavouriteItem(favContent.id)">Удалить из избранного</Button>
        </template>
    </Card>
</template>

<style scoped>
.card {
    border-radius: 15px;
    width: 30%;
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
}

.car-details {
    padding-top: 10px;
    text-align: left;

}

.car-image {
    width: 100%;
    text-align: center;
}

.car-image-inner {
    width: 250px;
    height: 150px;
    display: inline-block;
    vertical-align: middle;
}

.car-title {
    text-align: center;
    word-break: break-all;
}

.p-button {
    background: #3c3d41;
    color: white;
    border-radius: 4px;
    margin-left: 5%;
}

.p-button:hover {
    background-color: #24111d;
    color: #eb7fc5;
    border-radius: 10px;
}
</style>