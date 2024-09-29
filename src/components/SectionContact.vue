<template>
    <section :id="id">
        <v-card>
            <v-card-title>
                <h3>Contact us</h3>
            </v-card-title>
            <v-card-subtitle >
                <h3>Do you have any questions?</h3>
            </v-card-subtitle>
            <v-card-text>
                Please do not hesitate to contact us <a :href="mailtoLink">directly</a>.
                <v-container class="my-8">
                    <v-row>
                        <v-col v-for="item in items" :key="item" cols="12" lg="4" class="">
                            <v-card class="py-12 contact-card" :href="item.href" rel="noopener" target="_blank" hover>
                                <v-card-item>
                                    <v-card-title>
                                        <v-row no-gutters class="text-center">
                                            <v-col cols="12" sm="3" class="text-lg-right">
                                                <v-icon :icon="item.icon" size="x-large"></v-icon>
                                            </v-col>
                                            <v-col cols="12" sm="9">
                                                {{ item.text }}
                                            </v-col>
                                        </v-row>
                                    </v-card-title>
                                </v-card-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                Our services are available in the following areas:
                <v-sheet class="px-10 my-5">
                    <ul>
                        <li>KT1 – KT12</li>
                        <li>SW13 – SW20</li>
                        <li>TW1 – TW2</li>
                        <li>TW9 – TW12</li>
                        <li>W3 – W7</li>
                        <li>W12 – W13</li>
                    </ul>
                </v-sheet>
                If you are not in our catchment area, please <a :href="mailtoLink">contact us</a> to discuss alternative options.
            </v-card-text>
        </v-card>
    </section>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        default: () => []
    },
    email: {
        type: String,
        default: ''
    }
});

const mailtoLink = `mailto:${props.email}`;

</script>