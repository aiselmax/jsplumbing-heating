<template>
    <section :id="id">
        <v-card class="mx-auto py-8 text-center" variant="flat">
            <h2> Welcome to </h2>
            <h1 class="my-2">{{ title }}</h1>
            <h2>{{ text }}</h2>
            <v-card-actions class="justify-center mt-4">
                <v-btn color="primary" variant="elevated" size="large" v-smooth-scroll="{ target: 'contact', duration: 2000, offset: 100 }">{{ btnText }}</v-btn>
            </v-card-actions>
        </v-card>
    </section>
</template>
<style scoped>
.v-card-text,
.v-card-title {
    white-space: normal;
}
</style>
<script setup>
import { defineProps } from 'vue';

defineProps({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    btnText: {
        type: String,
        default: ''
    }
});

</script>