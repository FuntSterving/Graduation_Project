<template>
    <div class="">
        <section style="height:80px;"></section>

        <!----------- Footer ------------>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section" style=" width: 25%;">
                    <div class="footer-brand">
                        <h2>Logo</h2>
                        <p>Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam porttitor vitae orci nec ultricies.
                            Curabitur vehicula, libero eget faucibus faucibus, purus erat eleifend enim, porta pellentesque
                            ex mi ut sem.</p>
                        <p>&copy; 2014 BS3 UI Kit, All rights reserved</p>
                    </div>
                </div>
                <div class="footer-section" style=" width: 35%;">
                    <div class="footer-nav">
                        <h4>Menu —</h4>
                        <ul class="pages">
                            <li><a href="#">Travel</a></li>
                            <li><a href="#">Nature</a></li>
                            <li><a href="#">Explores</a></li>
                            <li><a href="#">Science</a></li>
                            <li><a href="#">Advice</a></li>
                        </ul>
                        <ul class="list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="footer-social">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">RSS</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="footer-ns">
                        <h4>Newsletter</h4>
                        <p>A rover wearing a fuzzy suit doesn’t alarm the real penguins</p>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                            <button class="btn btn-default" type="button"><i class="pi pi-envelope"></i></button>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div style="background-color: #522f45; width: 100%; height: 50px; border-top: solid 1px rgba(255, 255, 255, 0.10);">

            <section style="text-align:center; margin:0px auto; padding: 10px;">
                <p style="margin: 0; color: white;">Designed by <a href="http://enfoplus.net" style="text-decoration: none;">Prince J. Sargbah</a></p>
            </section>
        </div>
    </div>
</template>
  
<style scoped>
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
  