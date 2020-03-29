<template>
    <header class="header bg-grey">
        <div class="fixed_header bg-grey">
           
            <img src="/icons/logo.svg" alt="">
          
        </div>
        <div class="blank">
            
        </div>
        <div class="intro">
            <h2 class="project_title">{{settings.hero_title}}</h2>
            <p class="courant_italic" v-html="settings.hero_text"></p>
        </div>

        <div class="scroll bg-grey"> 
            <h5 class="courant_regular opacity_50">Scroll Down</h5>
            <img src="/icons/arrow-down.svg" alt="">
        </div>
    </header>
</template>

<script>
export default {
  data(){
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>

</style>
