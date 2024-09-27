<template>
    <section :id="id"></section>
    <v-footer>
        <v-row justify="center" no-gutters>
            <v-btn v-for="link in menuItems" :key="link" v-show="link.title" class="mx-2" variant="text" v-smooth-scroll="{ target: link.value, duration: 2000, offset: 100 }">
                {{ link.title }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — JS Plumbing & Heating Installations Ltd
            </v-col>
        </v-row>
    </v-footer>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    menuItems: {
        type: Array,
        required: false,
    },
    id: {
        type: String,
        required: true
    },
});
</script>