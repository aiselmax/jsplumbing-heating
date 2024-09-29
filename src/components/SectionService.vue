<template>
    <section :id="id">
        <v-card variant="elevated">
            <v-card-title>
                <h3>{{ title }}</h3>
            </v-card-title>
            <v-card-text>
                <v-expansion-panels class="my-4" variant="inset">
                    <v-expansion-panel v-for="(item, i) in items" :key="i">
                        <v-expansion-panel-title class="bg-surface-light">{{ item.title }}</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            {{ item.text }}
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>
    </section>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
    id: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        default: () => []
    },
    title: {
        type: String,
        default: ''
    }
});

</script>