<template>
  <form class="form-template" @submit.prevent="onSubmit">
    <template v-for="(field, key) in formFields" :key="key">
      <FieldGroup
        :field-id="key"
        :activeField="formState.activeField"
        :next="formState.next"
      >
        <FieldLabel :props="getFieldLabelMeta(key, field)" />
        <Component
          :is="field.component"
          v-model="formData[field.name]"
          v-bind="field.options.attrs"
          :field="getComponentFieldMeta(field)"
          @change="
            updateField({
              key: field.name,
              value: formData[field.name],
            })
          "
        />
        <FieldError
          :button-text="field.buttonText"
          :silentErrors="v.$silentErrors"
          @back="back"
          @next="onSubmit"
        >
        </FieldError>
      </FieldGroup>
    </template>

    <!-- Next and Back Nav -->
    <FormNav
      :isLastField="formState.isLastField"
      :isFirstField="formState.isFirstField"
      @back="back"
      @next="onSubmit"
    />

    <!-- Form Results -->
    <FormResult :isLastField="formState.isLastField" />
  </form>
</template>

<script setup>
import { provide } from "vue";
import { useVuelidate } from "@vuelidate/core";
// Pinia store
import { useLeadStore } from "../stores/LeadStore";
// Composables
import { useForm } from "../composables/useForm";
// Building-block components
import FieldGroup from "./FormElements/FieldGroup.vue";
import FieldError from "./FormElements/FieldError.vue";
import FieldLabel from "./FormElements/FieldLabel.vue";
import FormNav from "./FormElements/FormNav.vue";
import FormResult from "./FormElements/FormResult.vue";
import { pick } from "../utilities/";

// Expected props from parent
const props = defineProps({
  formFields: {
    type: Array,
    default: () => [],
  },
});

// Vuelidate collector instance for showing errors
const v = useVuelidate({ $stopPropagation: true });

// Composables
const { formData, formState, validateField, onSubmit, back } = useForm(
  props.formFields.length,
  v.value.$silentErrors.length
);

function getFieldLabelMeta(key, field) {
  return { key, ...pick(field, ["label", "name", "validation"]) };
}

function getComponentFieldMeta(field) {
  return {
    ...pick(field, ["name", "validation", "type", "text", "options", "label"]),
  };
}

// Provide
provide("vueform", {
  validateField,
  formState,
});

// Pinia
const store = useLeadStore();
const updateField = (payload) => {
  store.$patch((state) => {
    state.formData[payload.key] = payload.value;
  });
};
</script>
