<template>
  <div>
    <label v-for="(option, key) in options" :key="key">
      <input
        v-model="selectedValue"
        :type="type"
        :name="name"
        :value="option"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      {{ option }}
    </label>
  </div>
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
  options: {
    type: Array,
    default: () => [],
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

const { selectedValue } = useFormField(props);
</script>
