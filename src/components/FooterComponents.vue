<script setup>

</script>
<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <img src="@/assets/RestaurantGallery_logo_.png"
                    alt="FuntStervig" class="footerLogo" />
                <p>&copy; 2023 FuntStervig LTD</p>

            </div>
        </div>
    </footer>
</template>
  
<style>
.footer {
    background-color: #522f45 ; 
    color: white ; 
    padding: 40px 0; 
    margin-top: 5px;
    border-radius: 3px;
    border: 1px solid #dee2e6;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    
}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footerLogo {
    width: 35px;
    height: auto;
    margin-right: 10px; 
}

.footer p {
    margin: 0; 
    font-size: 18px; 
}

</style>