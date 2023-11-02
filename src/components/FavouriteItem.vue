<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
// eslint-disable-next-line no-unused-vars


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
            <Button></Button>
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
</style>