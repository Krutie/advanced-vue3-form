<template>
  <div>
    <label v-for="(option, key) in props.field.options.choices" :key="key">
      <input
        v-model="selectedValue"
        :type="props.field.type"
        :name="props.field.name"
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
  field: {
    type: Object,
    default: null,
  },
  modelValue: {
    type: String,
    default: "",
  },
  // type: {
  //   type: String,
  //   default: null,
  // },
  // options: {
  //   type: Array,
  //   default: () => [],
  // },
  // name: {
  //   type: String,
  //   default: "",
  // },
  // validation: {
  //   type: Object,
  //   default: null,
  // },
});

const { selectedValue } = useFormField(props);
</script>
