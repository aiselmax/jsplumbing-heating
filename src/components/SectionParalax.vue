<template>
    <div class="parallax" :src='img' :style="{ backgroundImage: 'url(' + img + ')' }" rel="preload"> </div>
</template>
<style>
.parallax {
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
}
</style>
<script setup>
import { defineProps } from 'vue';

defineProps({
    img: {
        type: String,
        required: true,
    },
});
</script>