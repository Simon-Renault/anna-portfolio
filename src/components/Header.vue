<template>
    <g-link to="/" class="fixed_header bg-grey" :style="{'background':bg}">
        <img src="/icons/logo.svg" alt="">
    </g-link>
</template>

<script>
export default {
    props:['bg'],
    data(){
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

