<template>
<div class="layout">
        <header>
            <div class="fixed_header bg-white">
                <g-link to="/">        
                    <img src="/icons/logo.svg" alt="">   
                </g-link>
            </div>
        </header>
        <slot></slot>
        <footer>
            <div class="credit">
                <h5 class="footer_italic center">{{settings.copyright}}</h5>
            </div>
        </footer>
</div>
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


<style lang="scss" >


</style>
