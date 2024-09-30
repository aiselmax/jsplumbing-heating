<template>
  <v-app>
    <v-container fluid>
      <MobileAppBar :menuItems="menuItems" />
      <NavMenu :menuItems="menuItems" />
      <v-main>
        <SectionTeaser :id="homeSection.id" :title="homeSection.title" :text="homeSection.text" :btnText="homeSection.btnText" />
        <SectionParalax :img="preloadedImg" />
        <SectionCards :id="aboutSection.id" :items="aboutSection.items" :cols="6" height="250px" />
        <SectionParalax :img="preloadedImg" />
        <SectionCards :id="philosophySection.id" :items="philosophySection.items" :cols="4" />
        <SectionParalax :img="preloadedImg" />
        <SectionService :id="servicesSection.id" :items="servicesSection.items" :title="servicesSection.title" />
        <SectionParalax :img="preloadedImg" />
        <SectionGallery :id="gallerySection.id" :galleryItems="gallerySection.galleryItems" />
        <SectionParalax :img="preloadedImg" />
        <SectionContact :id="contactSection.id" :items="contactSection.items" :email="contactSection.email" />
        <SectionParalax :img="preloadedImg" />
        <SectionFooter :id="footerSection.id" :menuItems="menuItems" :text="footerSection.text" />
      </v-main>
    </v-container>
  </v-app>
</template>
<style>
body,
.text-h1,
.text-h2,
.text-h3,
.text-h4,
.text-h5,
.text-h6 {
  font-family: "Lato", sans-serif;
}

body,
.v-card-text {
  font-size: 1rem !important;
}

h1 {
  font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem) !important;
  color: #003e6c;
}

h2 {
  font-size: clamp(1.375rem, 1.5vw + 0.5rem, 2rem) !important;
  color: #4f4f4f;
}

h3 {
  font-size: clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem) !important;
}
</style>
<script setup>
import { ref, onMounted } from 'vue';

import NavMenu from './components/NavMenu.vue';
import SectionTeaser from './components/SectionTeaser.vue';
import SectionParalax from './components/SectionParalax.vue';
import SectionCards from './components/SectionCards.vue';
import SectionService from './components/SectionService.vue';
import SectionGallery from './components/SectionGallery.vue';
import SectionContact from './components/SectionContact.vue';
import SectionFooter from './components/SectionFooter.vue';
import MobileAppBar from './components/MobileAppBar.vue';

import {headConfig, menuConfig, sectionsConfig } from './dataConfig.js';
import { useHead } from '@unhead/vue'
import imgPath from './assets/home.jpg';
const preloadedImg = ref('');

useHead({
  title: headConfig.title,
  meta: [
    { name: 'description', content: headConfig.description },
    { property: 'og:title', content: headConfig.title },
    { property: 'og:description', content: headConfig.description },
    { name: 'keywords', content: headConfig.keywords },
  ],
})

onMounted(() => {
  const img = new Image();
  img.src = imgPath;
  img.onload = () => {
    preloadedImg.value = imgPath;
  };
  img.onerror = () => {
    console.error('Bild konnte nicht geladen werden.');
  };
});

const menuItems = Object.values(menuConfig);

const homeSection = sectionsConfig.home;
const aboutSection = sectionsConfig.about;
const philosophySection = sectionsConfig.philosophy;
const servicesSection = sectionsConfig.services;
const gallerySection = sectionsConfig.gallery;
const contactSection = sectionsConfig.contact;
const footerSection = sectionsConfig.footer;

</script>