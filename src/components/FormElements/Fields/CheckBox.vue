<template>
  <div>
    <label v-for="(option, key) in props.field.options.choices" :key="key">
      <input
        :id="option"
        v-model="selectedValue"
        :type="props.field.type"
        :value="option"
        @change="$emit('update:modelValue', selectedValue)"
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
    type: Array,
    default: () => [],
  },
  // type: {
  //   type: String,
  //   default: null,
  // },
  // options: {
  //   type: Array,
  //   default: () => { },
  // },
  // name: {
  //   type: String,
  //   default: null,
  // },
  // validation: {
  //   type: Object,
  //   default: null,
  // },
});

const { selectedValue } = useFormField(props);
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
