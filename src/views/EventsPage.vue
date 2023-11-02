
<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';

const events = [
    {
        id: 1,
        image: 'https://sxodim.com/uploads/posts/2023/10/23/optimized/92794657b573cc3c7fe18512bd7be460_352x198-q-85.jpg',
        title: 'Тур на внедорожниках «Озеро Каинды, каньоны Черный и Чарынский»',
        info: 'от 25 000 тенге, 2 ноября в 06:30, Озеро Каинды',
        link: 'https://sxodim.com/almaty/event/tur-na-vnedorozhnikah-ozero-kaindy-kanony-chernyy-i-charynskiy'
    },
    {
        id: 2,
        image: 'https://sxodim.com/uploads/posts/2023/09/26/optimized/b455617ec9d4036a9b83a3d8bf63f641_352x198-q-85.jpg',
        title: 'Выставка «Искусственный интеллект – художник или машина?»',
        info: 'от 2000 тенге, 2 ноября в 09:00, Центральный государственный музей РК, мкр. Самал-1, д. 44',
        link: 'https://sxodim.com/almaty/event/vystavka-iskusstvennyy-intellekt-hudozhnik-ili-mashina'
    },
    {
        id: 3,
        image: 'https://sxodim.com/uploads/posts/2023/10/31/optimized/09f12c4520e9e34f80fa1f20f3c066ea_352x198-q-85.jpg',
        title: 'Мастер-класс «Керамическая лепка»',
        info: '7000 тенге, 2 ноября в 10:00, Арт-галерея Clay House, ул. Наурызбай батыра 82 (угол Казыбек би)',
        link: 'https://sxodim.com/almaty/event/master-klass-keramicheskaya-lepka'
    },
    {
        id: 4,
        image: 'https://sxodim.com/uploads/posts/2023/08/11/optimized/7827a18fed1cbc468183e11db377b00d_352x198-q-85.jpg',
        title: 'Выставка «Клод Моне. Гений импрессионизма»',
        info: ' от 2500 тенге, 2 ноября в 11:00, Галерея Vekarta, ул. Сатпаева 30/5 корпус 2',
        link: 'https://sxodim.com/almaty/event/vystavka-klod-mone-geniy-impressionizma'
    },


    {
        id: 5,
        image: 'https://sxodim.com/uploads/posts/2023/09/29/optimized/40433d87bacc34dcee1e4dbaca8ca1c7_352x198-q-85.jpg',
        title: 'Выставка «Banksy. Гений или вандал»',
        info: 'от 3000 тенге, 2 ноября в 11:00, Мультимедийный музей Lumiere-Hall, пр. Аль-Фараби, 13 к2в',
        link: 'https://sxodim.com/almaty/event/vystavka-banksy-geniy-ili-vandal'
    },
    {
        id: 6,
        image: 'https://sxodim.com/uploads/posts/2023/06/06/optimized/ff774e8395e09201b4da02bb8d633bb4_352x198-q-85.jpg',
        title: 'Музыкальное выступление Ирэн Аравиной',
        info: '5000 тенге, 2 ноября в 19:00, Музкафе, пр. Абая, 117',
        link: 'https://sxodim.com/almaty/event/muzykalnoe-vystuplenie-iren-aravinoy-i-gruppy-jazz-house'
    },
    {
        id: 7,
        image: 'https://sxodim.com/uploads/posts/2023/10/26/optimized/baa44b5a22bcaf1770aa222f569261da_352x198-q-85.jpg',
        title: 'Дегустация вин Греции из бокалов Spiegelauv',
        info: '5000 тенге, 2 ноября в 19:00, AlmaWine, пр. Достык 109, 2 этаж',
        link: 'https://sxodim.com/almaty/event/degustaciya-vin-grecii-iz-bokalov-spiegelauv'
    },
    {
        id: 8,
        image: 'https://sxodim.com/uploads/posts/2023/10/30/optimized/6cb611949773e25eb3a522a6bdf27c4e_352x198-q-85.jpg',
        title: 'Турнир по импровизации Improv Battle. Турнир 1/4.',
        info: 'от 1500 тенге, 2 ноября в 19:30, Стендап клуб Almaty Central Stand up club, ул. Кабанбай Батыра, 71',
        link: 'https://sxodim.com/almaty/event/turnir-po-improvizacii-improv-battle-turnir-1-4'
    },
    {
        id: 9,
        image: 'https://sxodim.com/uploads/posts/2023/10/30/optimized/970d9d213f692dd1d28753b7285f6278_352x198-q-85.jpg',
        title: 'Вечерний кинопоказ под открытым небом',
        info: ' от 3500 тенге, 2 ноября в 19:30, пр. Жибек Жолы, 135, вход со стороны ул. Масанчи',
        link: 'https://sxodim.com/almaty/event/vecherniy-kinopokaz-pod-otkrytym-nebom'
    },

];

const redirectToEvent = (link) => {
    // Выполните переход по ссылке при нажатии кнопки "Save"
    window.location.href = link;
};
</script>

<template>
    <div class="page-content">
        <h1 class="page-title">Куда сходить в ноябре 2023 в Алматы</h1>
        <div class="card-container">
            <Card v-for="event in events" :key="event.id" style="width: 25em; margin: 10px;">
                <template #header>
                    <div class="image-container">
                        <img :src="event.image" :alt="event.title">
                    </div>
                </template>
                <template #title>{{ event.title }}</template>
                <template #content>
                    <p class="m-0">{{ event.info }}</p>
                </template>
                <template #footer>
                    <Button icon="pi pi-megaphone" label="Посмотреть" @click="redirectToEvent(event.link)" />
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
.p-button {
    background: #3c3d41;
    color: white;
    border-radius: 4px;
    margin-left: 35%;
}

.p-button:hover {
    background-color: #24111d;
    color: #eb7fc5;
    border-radius: 10px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.p-card {
    border-radius: 20px;
}

.card {
    width: calc(33.33% - 20px);
    /* 3 карточки в ряд с отступами */
}

:deep(.p-card-title){
    text-align: center !important;
}


.m-0 {
    margin: 0 !important;
    text-align: center;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    /* Высота картинки */
    margin-top: 10px;
    border-radius: 15px;

}

.page-title {
    color: #fff;
    text-align: center;
    margin: 1em;
}
</style>

  

     


