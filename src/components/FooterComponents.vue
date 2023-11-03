<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const redirectToContacts = () => {
    router.push('/contacts');
};
const redirectToAboutUs = () => {
    router.push('/aboutus');
};
const redirectToHome = () => {
    router.push('/home');
};
const redirectToRestaurant = () => {
    router.push('/restaurants');
};

const redirectToEvents = () => {
    router.push('/events');
};
const redirectToFavorites = () => {
    router.push('/favorites');
};

</script>
<template>
    <div class="">


        <!----------- Footer ------------>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section" style=" width: 25%;">
                    <div class="footer-brand">
                        <h2>Гелерея ресторанов</h2>
                        <p>Вкус мира в каждом блюде, искусство в каждом уголке</p>

                    </div>
                </div>
                <div class="footer-section" style=" width: 35%;">
                    <div class="footer-nav">
                        <h4>Меню —</h4>
                        <ul class="pages">
                            <li @click="redirectToHome"> <a href="#">Главная</a></li>
                            <li @click="redirectToRestaurant"> <a href="#">Галерея</a></li>
                            <li @click="redirectToEvents"> <a href="#">События</a></li>
                            <li @click="redirectToFavorites"> <a href="#">Избаранное</a></li>

                        </ul>
                        <ul class="list">
                            <li @click="redirectToAboutUs"><a href="#">About Us</a></li>
                            <li @click="redirectToContacts"><a href="#">Contacts</a></li>

                        </ul>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="footer-social">
                        <h4>Подписывайтесь —</h4>
                        <ul>
                            <li> <a href="https://www.facebook.com/example" target="_blank"> Facebook</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/example" target="_blank"> Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/example" target="_blank"> Google</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="footer-ns">
                        <h4>Новостная рассылка —</h4>
                        <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        <div class="input-group">
                            <input type="text" class="form-control">
                            <button class="btn btn-default" type="button"><i class="pi pi-envelope"
                                    style="color: #fff;"></i></button>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div style="background-color: #522f45; width: 100%; height: auto; border-top: solid 1px rgba(255, 255, 255, 0.10);">
            <section style="text-align:center; margin:0px auto; padding: 10px;">
                <p style="margin: 0; color: white;">Designed by <a href="https://github.com/FuntSterving"
                        class="FuntSterving" target="_blank">FuntSterving</a></p>
                <p style="margin: 0; color: white;">&copy; All rights reserved</p>
            </section>
        </div>
    </div>
</template>
  
<style scoped>
.FuntSterving {
    text-decoration: none;
    color: #fff;
}

.FuntSterving:hover {
    text-decoration: underline;
    cursor: pointer;
}

.footer {
    background-color: #3c3d41;
    color: rgba(255, 255, 255, 1.00);
    padding: 60px 40px;

    border-bottom-right-radius: 6px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 6px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer-section {
    padding: 10px;
    text-align: left;
}

.footer-brand h2 {
    margin: 0px 0px 10px;
}

.footer-brand p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.70);
}

.footer-nav {
    /* Используем Flexbox для разделения на два столбца */
    display: flex;
    justify-content: space-between;
}


.footer-nav h4,
.footer-social h4,
.footer-ns h4 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 10px;
}

.footer-nav ul.pages,
.footer-nav ul.list,
.footer-social ul {
    list-style: none;
    padding: 0px;
}

.footer-nav ul.pages li,
.footer-nav ul.list li,
.footer-social li {
    padding: 5px 0px;
}

.footer-nav ul.pages a,
.footer-nav ul.list a,
.footer-social a {
    color: rgba(255, 255, 255, 1.00);
    font-weight: bold;
    text-transform: uppercase;
}

.footer-nav ul.pages a:hover,
.footer-nav ul.list a:hover,
.footer-social a:hover {
    color: rgba(255, 255, 255, 0.80);
    text-decoration: none;
}

.footer-ns p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.70);
}

@media (min-width: 768px) {
    .footer-section {
        border-left: solid 1px rgba(255, 255, 255, 0.10);
    }
}
</style>
  