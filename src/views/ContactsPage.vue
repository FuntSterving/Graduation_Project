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

        <h3>Форма обратной связи</h3>
        <form action="process_form.php" method="post">
            <label for="name">Имя:</label>
            <input type="text" id="name" name="name" required><br>

            <label for="email">Электронная почта:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="message">Сообщение:</label><br>
            <textarea id="message" name="message" rows="4" required></textarea><br>

            <input type="submit" value="Отправить">
        </form>

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
    background-color: #e9edf3;
    border-radius: 3px;
    border: 1px solid #dee2e6;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
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
    background-color: #708da9;
    color: #fff;
    padding: 20px;
    text-align: center;
}

h3 {
    color: #333;
    margin-top: 20px;
}

p {
    color: #666;
}

a {
    color: #007bff;
    text-decoration: none;
    margin: 10px;
    cursor: pointer;
}

a:hover {
    text-decoration: underline;
}

form {
    margin-top: 20px;
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    align-items: center;
    display: inline-block;
}

label {
    font-weight: bold;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}
</style>