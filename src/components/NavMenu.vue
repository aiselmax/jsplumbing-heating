<template>
    <v-navigation-drawer floating mobile-breakpoint="md">
        <v-list density="compact" nav>
            <v-list-item v-if="logo" :ripple="false" variant="flat" value="home" link v-smooth-scroll="'home'" class="mb-5" :active="false" >
                <v-img :aspect-ratio="4 / 3" cover alt="Logo" :src='img'></v-img>
            </v-list-item>
            <v-list-item v-for="item in menuItems" :key="item.value" v-show="item.title" :prepend-icon="item.icon" :value="item.value" :class="{ active: activeItem === item.value }" link v-smooth-scroll="{ target: item.value, duration: 2000, offset: 100 }" :active="false">
                <span class="sidenav">{{ item.title }}</span>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<style scoped>
.sidenav {
    font-size: 1.4rem !important;
    color: #818181;
}

/* Active menu item color */
.active .sidenav,
.active {
    color: #d10826;
}
</style>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { defineProps } from 'vue';
import img from '@/assets/logo.png';

// Props Definition
const props = defineProps({
    menuItems: {
        type: Array,
        required: true
    },
    logo: {
        type: Boolean,
        default: true
    }
});

const activeItem = ref(null);
let observer = null; // Declare the observer variable outside

const observeSections = () => {
    // Access the sections based on props.menuItems
    const sections = props.menuItems.map(item => document.getElementById(item.value));

    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeItem.value = entry.target.id;
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of the section is in view
    );

    // Observe each section
    sections.forEach(section => {
        if (section) {
            observer.observe(section);
        }
    });
};

onMounted(() => {
    observeSections();
});

onBeforeUnmount(() => {
    // Ensure observer is defined before trying to disconnect
    if (observer) {
        observer.disconnect();
    }
});
</script>
