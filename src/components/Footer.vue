<template>
  <footer class="footer">
            <div class="contact"> 
                <h2 class="project_title">Get in touch</h2>
                <p class="courant_italic">Want to see more things, grow up a project together or have a coffee?<br>Feel free to write me</p>
                 <a href="anna-rabeony.pdf" target="_blank">
                     <div class="resume_link">
                         <h4 class="courant_bold">Read Resumé</h4>
                         <img src="images/Icons/arrow_right.svg" alt="">
                 
                     </div>
                 </a>
                <div class="social_media">
                     <a href="https://www.instagram.com/anna.rabeony.pro/" target="_blank">
                         <img src="/icons/Instagram.svg" alt="">
                     </a>
                     <a href="https://dribbble.com/AnnaRabeony/" target="_blank">
                         <img src="/icons/Dribbble.svg" alt="">
                     </a>
                     <a href="mailto:contact@anna-rabeony.com" target="_blank">
                         <img src="/icons/Mail.svg" alt="">
                     </a>
                     <a href="https://www.linkedin.com/in/anna-rabeony-747b35149/" target="_blank">
                         <img src="/icons/Linkedin.svg" alt="">
                     </a>
                     <a href="https://medium.com/@anna.rabeony.pro" target="_blank">
                         <img src="/icons/Medium.svg" alt="">
                     </a>
                </div>
 
            </div>
            <div class="credit">
                <h5 class="footer_italic center">© Crafted by Anna, in Shanghai, 2019</h5>
            </div>
        </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>

</style>
