<template>
  <input
    :id="name"
    v-model="selectedValue"
    v-focus
    :type="type"
    :name="name"
    :placeholder="$attrs['placeholder']"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { useFormField } from "../../../composables/useFormField";

defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: "",
  },
  validation: {
    type: Object,
    default: null,
  },
});

const { selectedValue, vFocus } = useFormField(props);
</script>
