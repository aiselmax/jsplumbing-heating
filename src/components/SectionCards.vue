<template>
    <section :id="id">
        <v-row>
            <v-col v-for="(item, i) in items" :key="i" cols="12" :lg="cols">
                <v-card v-if="i % 2 == 0" :variant="variant" class="my-8 py-4 bg-surface-light">
                    <v-card-title>
                        <h3>{{ item.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                        {{ item.text }}
                    </v-card-text>
                </v-card>
                <v-card v-else :variant="variant" class="my-8 py-4">
                    <v-card-title>
                        <h3>{{ item.title }}</h3>
                    </v-card-title>
                    <v-card-text>
                        {{ item.text }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>
<style scoped>
.v-card-title {
    white-space: normal;
}

.v-card-text {
    white-space: pre-wrap;
    min-height: v-bind(height);
}

</style>
<script setup>
import { defineProps } from 'vue';

defineProps({
    items: {
        type: Array,
        required: true,
    },
    cols: {
        type: Number,
        default: 6,
    },
    variant: {
        type: String,
        default: 'elevated',
    },
    height: {
        type: String,
        default: '200px',
    },
    id: {
        type: String,
        required: true,
    }
});


</script>