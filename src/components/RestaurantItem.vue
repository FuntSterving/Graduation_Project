<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';

defineProps({
  content: {
    type: Object,
    required: true,
  },
})

</script>



<template>
  <Card style="width: 20em; margin-top: 3em;" class="card">
    <template #header>
      <div class="car-image">
        <img :src="content.image" alt="" class="car-image-inner">
      </div>
    </template>

    <template #title>
      <div class="car-title">{{ content.brand }}</div>
    </template>


    <template #content>
      <div class="car-details">
        <p> {{ content.location }}</p>
        <!-- <p>Тип кухни: {{ content.typeOfCuisine }}</p>
        <p>Время работы: {{ content.workingHours }}</p>
        <p>Количество посадочных мест: {{ content.numberOfSeats }}</p> -->
      </div>
    </template>
    <template #footer>
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