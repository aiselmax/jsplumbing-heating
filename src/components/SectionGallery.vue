<template>
    <section :id="id">
        <v-card variant="elevated">
            <v-card-title>
                <h2>{{ galleryTitle }}</h2>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col v-for="(item, index) in galleryItemsWithPaths" :key="index" cols="12" :md="galleryCols">
                        <v-card variant="flat" class="my-4">
                            <v-card-subtitle class="text-center">
                                <h3> {{ item.title }} </h3>
                            </v-card-subtitle>
                            <v-card-text>
                                <v-carousel hide-delimiter-background>
                                    <v-carousel-item v-for="(image, imgIndex) in item.imagePaths" :key="imgIndex" :src="image" @click="openDialog(item.title, imgIndex, item.imagePaths)" cover class="pointer">
                                    </v-carousel-item>
                                </v-carousel>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <!-- Dialog -->
        <v-dialog v-if="isDesktop" v-model="dialog" max-width="80%">
            <v-card>
                <v-card-title class="text-center">
                    <h3> {{ selectedImageTitle }}</h3>
                </v-card-title>
                <v-card-text>
                    <v-carousel v-model="currentImageIndex" hide-delimiter-background height="80vh">
                        <v-carousel-item v-for="(image, imgIndex) in currentImagePaths" :key="imgIndex" :src="image">
                        </v-carousel-item>
                    </v-carousel>
                </v-card-text>
                <v-card-actions>
                    <v-btn class="ms-auto" @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </section>
</template>
<style scoped>
.pointer {
    cursor: pointer;
}
</style>
<script setup>
import { defineProps, computed, ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    galleryItems: {
        type: Array,
        required: true,
    },
    galleryTitle: {
        type: String,
        default: 'Gallery',
    },
    galleryCols: {
        type: Number,
        default: 6,
    }
});

const isDesktop = window.innerWidth > 768;

// Use require() to create imagePaths
const galleryItemsWithPaths = computed(() =>
    props.galleryItems.map(item => ({
        ...item,
        imagePaths: item.images.map(image => require(`@/assets/gallery/${item.dir}/${image}`))
    }))
);

const dialog = ref(false);
const currentImageIndex = ref(0);
const selectedImageTitle = ref('');
const currentImagePaths = ref([]);

const openDialog = (title, imgIndex, imagePaths) => {
    selectedImageTitle.value = title;
    currentImageIndex.value = imgIndex; // Set the index of the clicked image
    currentImagePaths.value = imagePaths; // Set the image for the current carousel-item
    dialog.value = true;
};
</script>
