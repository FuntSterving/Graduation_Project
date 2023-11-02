<script setup>
import 'primeicons/primeicons.css';

</script>
<template>
    <div class="container">
        <h1>Контакты</h1>

        <h3>Адрес</h3>
        <p>123 улица Пример, Город, Страна, Почтовый индекс</p>

        <h3>Номер телефона</h3>
        <p>+7 (123) 456-7890</p>

        <h3>Электронная почта</h3>
        <p><a href="mailto:info@example.com">info@example.com</a></p>



        <h3>Карта</h3>
        <section class="map">
            <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 500px">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42534533.70853051!2d75.10317026228574!3d48.48903561379758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2skz!4v1674724745381!5m2!1sru!2skz"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

        <h3>Время работы</h3>
        <p>Понедельник - Пятница: 9:00 - 18:00<br>Суббота - Воскресенье: Выходной</p>

        <h3>Социальные сети</h3>
        <p>Следите за нами в социальных сетях:
            <span> <a href="https://www.facebook.com/example"><i class="pi  pi-facebook"
                        style="color: #365595; font-size: 1.5rem;"></i></a></span>
            <span><a href="https://twitter.com/example"><i class="pi  pi-twitter"
                        style="color: #36a4cf; font-size: 1.5rem;"></i></a></span>
            <span> <a href="https://www.instagram.com/example"><i class="pi  pi-google"
                        style="color: #d41332; font-size: 1.5rem;"></i></a></span>
        </p>
    </div>
</template>
<style scoped>
.container {
    font-family: Arial, sans-serif;
    border-radius: 3px;
    text-align: center;
}


.map-container {
    overflow: hidden;
    position: relative;
    height: 0;
}

.map-container iframe {
    left: 25%;
    top: 0;
    height: 90%;
    width: 50%;
    position: absolute;
}

h1 {
   
    color: #fff;
    padding: 20px;
    text-align: center;
}

h3 {
    color: #fff;
    margin-top: 20px;
}

p {
    color: #fff;
}

a {
    color: #fff;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
}

a:hover {
    text-decoration: underline;
}
</style>