<template>
    <div>
        <label v-for="(option, key) in options" :key="key">
            <input :type="type" :id="option" :value="option" v-model="selectedValue"
                @change="$emit('update:modelValue', selectedValue)" />
            {{ option }}
        </label>
    </div>
</template>

<script setup>

import { useFormField } from '../../../composables/useFormField';

const props = defineProps(["modelValue", "type", "options", "name", "validation"]);

const { selectedValue } = useFormField(props)

</script>

<style>
label {
    display: block;
    background: #b8f4e87a;
    padding: 5px;
    border-radius: 3px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
}
</style>
