<template>
    <div>
        <textarea v-model="selectedValue" :placeholder="$attrs['placeholder']"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script setup>

import { useFormField } from '../../../composables/useFormField';

const props = defineProps(["modelValue", "type", "options", "name", "validation"]);

const { selectedValue } = useFormField(props)

</script>
