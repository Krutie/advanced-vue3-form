<template>
    <div>
        <label v-for="(option, key) in options" :key="key">
            <input :type="type" :name="name" :value="option" @input="$emit('update:modelValue', $event.target.value)"
                v-model="selectedValue" />
            {{ option }}
        </label>
    </div>
</template>

<script setup>

import { useFormField } from '../../../composables/useFormField';

const props = defineProps(["modelValue", "type", "options", "name", "validation"]);

const { selectedValue } = useFormField(props)

</script>
