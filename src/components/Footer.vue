<template>
    <footer class="footer">
            <div class="contact" v-if="hasContact"> 
                <h2 class="project_title">{{settings.footer_title}}</h2>
                <p class="courant_italic"  v-html="settings.footer_text" ></p>
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
                <h5 class="footer_italic center" >{{settings.copyright}}</h5>
            </div>
        </footer>
</template>

<script>

export default {
    props: {
        hasContact : Boolean
    },
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>

</style>
