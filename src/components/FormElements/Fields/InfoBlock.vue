<template>
    <div class="info-block">
        <span v-html="text"> </span>
    </div>
</template>

<script setup>

import { inject } from 'vue';

const props = defineProps(["text"]);

/**
 * Inject
 */
const validateField = inject('validateField')

validateField(true)

</script>
