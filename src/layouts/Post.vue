<template>
<div class="layout">
       
    <Header bg="#FFFFFF" />
    <slot></slot>
    <Footer hasContact="false" />
       
</div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default {
      data() {
        return {
            settings: require("../../data/theme.json")
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>


<style lang="scss" >


</style>
