<template>
    <v-app-bar :elevation="4" class="hidden-md-and-up">
        <v-img v-if="logo" :src='img' alt="Logo" contain v-smooth-scroll="{ target:'home', offset: 0 }"></v-img>
        <v-toolbar-title>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = true">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar flat color="blue-grey darken-2">
                    <v-toolbar-title>Menu</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list>
                    <v-list-item v-for="item in menuItems" :key="item.value" v-show="item.title" :prepend-icon="item.icon" :value="item.value" :class="{ active: activeItem === item.value }" link v-smooth-scroll="{ target: item.value, duration: 1000, offset: 100 }" :active="false" @click="dialog = false">
                        {{ item.title }}
                    </v-list-item>
                </v-list>
            </v-card>
        </v-dialog>
    </v-app-bar>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import img from '@/assets/logo.png';

defineProps({
    menuItems: {
        type: Array,
        required: true,
        default: () => [],
    },
    logo: {
        type: Boolean,
        default: true
    }
});

// Dialog open/close state
const dialog = ref(false);

</script>
