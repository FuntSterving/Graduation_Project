<script setup>
// eslint-disable-next-line no-unused-vars
import { CAlert } from '@coreui/bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { CCarouselItem } from '@coreui/bootstrap-vue'
import { CCarousel } from '@coreui/bootstrap-vue'
// eslint-disable-next-line no-unused-vars
import Badge from 'primevue/badge';

</script>
<template>
    <div class="page-container">

        <div class="blog-div-left">
            <h5 style="margin: 5%;"> <i class="pi pi-book"></i> Читай интересное! </h5>
            <ul class="ulLeft">
                <li><a href="https://xn--80adjb3bemchk.xn--p1ai/articles/pravila-etiketa-v-restorane" target="_blank"> <i
                            class="pi pi-angle-right" style="color: #fff"></i> Правила этикета в ресторане</a></li>
                <li><a href="https://www.restoclub.ru/review/industry/wheretodrink-2023-itogi" target="_blank"><i
                            class="pi pi-angle-right" style="color: #fff"></i> WhereToDrink
                        2023: итоги</a></li>
                <li><a href="https://www.restoclub.ru/review/foodtrip/luchshie-kafe-v-prage" target="_blank"> <i
                            class="pi pi-angle-right" style="color: #fff"> </i>Лучшие кафе в
                        Праге</a></li>
                <li><a href="https://www.restoclub.ru/msk/place/peshi-1/offer/novogodnjaja-noch" target="_blank"><i
                            class="pi pi-angle-right" style="color: #fff"></i> Новогодняя
                        ночь в ресторане «Peshi»</a></li>
                <li><a href="https://ufaved.info/articles/azbuka/istoriya_odnogo_blyuda_ratatuy/" target="_blank"> <i
                            class="pi pi-angle-right" style="color: #fff"></i> История
                        одного блюда: рататуй</a></li>
            </ul>
        </div>


        <div class="CarouselContainer">
            <CCarousel controls>
                <!-- style="background-color: #f1f5f9;" -->
                <CCarouselItem class="CarouselItemContainer">
                    <Badge class="flex flex-wrap justify-content-center align-items-start gap-2 " size="xlarge"
                        severity="danger"
                        style="background: radial-gradient(circle, rgba(82,47,69,1) 0%, rgba(60,61,65,1) 100%); color: #fff;">
                        <a href="https://buonomoscow.ru/" target="_blank"
                            style="text-decoration: none; color: #fff;  font-size: x-large; padding-top: 0.5em; ">Посетить</a>
                    </Badge>

                    <img class="d-block w-100"
                        src="https://static.tildacdn.com/tild3334-3630-4137-a530-306263303536/IMG_6544-2.png"
                        alt="slide 1" />
                    <CCarouselCaption class="d-none d-md-block">
                        <h5>BUONO</h5>
                        <p> BUONO— Панорамный итальянский ресторан</p>
                    </CCarouselCaption>
                </CCarouselItem>



                <CCarouselItem class="CarouselItemContainer">
                    <Badge class="flex flex-wrap justify-content-center align-items-start gap-2 " size="xlarge"
                        severity="danger"
                        style="background: radial-gradient(circle, rgba(82,47,69,1) 0%, rgba(60,61,65,1) 100%); color: #fff;">
                        <a href="https://veter.restaurant/" target="_blank"
                            style="text-decoration: none; color: #fff; font-size: x-large; padding-top: 0.5em;">Посетить</a>
                    </Badge>

                    <img class="d-block w-100"
                        src="https://img.restoclub.ru/uploads/place/3/9/2/8/3928281353245bf2afee9f703e78d747_w958_h835--big.jpg"
                        alt="slide 2" />
                    <CCarouselCaption class="d-none d-md-block">
                        <h5>Veter</h5>
                        <p>Veter — ресторан русско-французской кухни от Ксении Собчак, Антона Пинского и Владимира Чистякова
                            на
                            Петроградке.</p>
                    </CCarouselCaption>
                </CCarouselItem>

                <CCarouselItem class="CarouselItemContainer">
                    <Badge class="flex flex-wrap justify-content-center align-items-start gap-2 " size="xlarge"
                        severity="danger"
                        style="background: radial-gradient(circle, rgba(82,47,69,1) 0%, rgba(60,61,65,1) 100%); color: #fff;">
                        <a href="https://sempre.moscow/" target="_blank"
                            style="text-decoration: none; color: #fff; font-size: x-large; padding-top: 0.5em;">Посетить</a>
                    </Badge>

                    <img class="d-block w-100"
                        src="https://sempre.moscow/wp-content/uploads/2021/12/IMG_2412-Edit-2-scaled.jpg" alt="slide 3" />
                    <CCarouselCaption class="d-none d-md-block">
                        <h5>SEMPRE</h5>
                        <p> SEMPRE — зелёный уголок в центре столицы с европейской кухней в авторской интерпретации и
                            дизайнерским
                            эко-интерьером.</p>
                    </CCarouselCaption>
                </CCarouselItem>

            </CCarousel>
        </div>

        <!-- Див справа -->
        <div class="blog-div-right">
            <h5 style="margin: 5%; text-align: end;"> <i class="pi pi-video"></i> Смотри интересное! </h5>
            <div class="videoCont">
                <div>
                    <iframe width="200" height="115"
                        src="https://www.youtube.com/embed/ReiDVQczDLg?si=S9aVbBiOP55exy-0&amp;controls=0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

                <div>
                    <iframe width="200" height="115"
                        src="https://www.youtube.com/embed/G-i8g_GzMYA?si=ChU1zs30Y8Zks6iq&amp;controls=0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>

                <div>
                    <iframe width="200" height="115"
                        src="https://www.youtube.com/embed/RVOKvK0ojqI?si=i8wM5yfNJnsCTPyU&amp;controls=0"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>



        </div>

    </div>
</template>

<style scoped>
.videoCont {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    margin: 5%;
}


.page-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
}

.blog-div-left,
.blog-div-right {
    width: 25%;
    height: 100%;
}

.blog-div-left h5 {
    color: #fff;
    text-decoration: underline;
}

.blog-div-right h5 {
    color: #fff;
    text-decoration: underline;
}

.blog-div-left {
    line-height: 3;
}

.CarouselContainer {
    width: 50%;
    height: 100%;
}


.p-badge.p-badge-xl[data-v-bd032450] {
    font-size: 3.5rem;
    min-width: 8rem;
    height: 5rem;
    line-height: 3rem;
    position: absolute;
    top: 48px;
    right: 40px;
}


.CarouselContainer {
    margin-top: 2%;
}


.carousel-inner {
    position: relative;
    width: 95%;
    overflow: hidden;
    height: 400px;
}

.CarouselItemContainer {
    margin-bottom: 20px;

}

.carousel {
    width: 100%;
    margin: 0 auto;
}

.carousel-item {
    text-align: center;
}

.carousel-item img {
    max-width: 100%;
    height: auto;
    width: 50%;
    border-radius: 5px;
}

.carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    padding: 10px;
}

.carousel-caption h5 {
    font-size: 24px;
}

.carousel-caption p {
    font-size: 18px;
}

.blog-div-left ul.ulLeft {
    list-style: none;
    padding: 0px;
    margin: 3%;
    text-align: start;
    color: #fff;
}

li a:hover {
    text-decoration: underline;
    border-radius: 5px;
    margin: 9px;
    padding: 5px;
    color: #eb7fc5;
}



iframe:hover {
    background-color: #24111d;
    border-radius: 5px;
    margin: 9px;

}

.blog-div-right ul.ulRight {
    list-style: none;
    padding: 0px;
    margin: 5%;
    text-align: end;
    color: #fff;
}

h5 {
    margin-top: 10px;
    color: #fff;
}

a {
    text-decoration: none;
    color: #fff;
}

p {
    color: #fff;
}
</style>