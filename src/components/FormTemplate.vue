<template>
  <form class="form-template" @submit.prevent="onSubmit">
    <template v-for="(field, key) in formFields" :key="key">
      <FieldGroup :field-id="key">
        <div class="field-area">
          <FieldLabel
            :props="{
              key: key,
              name: field.name,
              text: field.label,
              validation: field.validation,
            }"
          />
          <Component
            :is="field.component"
            v-model="formData[field.name]"
            v-bind="field.options.attrs"
            :name="`${field.name}`"
            :validation="field.validation"
            :type="field.type"
            :text="!!field.text ? field.text : false"
            :options="!!field.options.choices ? field.options.choices : false"
            @change="
              updateField({
                key: field.name,
                value: formData[field.name],
              })
            "
          />
          <FieldError
            :button-text="field.buttonText"
            @back="back"
            @next="onSubmit"
          >
            <div v-if="!formState.valid">
              <div
                v-for="error of v.$silentErrors"
                :key="error.$uid"
                class="input-errors error-msg"
              >
                <Icon icon="ep:warning-filled" />
                {{ error.$message }}
              </div>
            </div>
          </FieldError>
        </div>
      </FieldGroup>
    </template>

    <!-- Next and Back Nav -->
    <FormNav @back="back" @next="onSubmit" />

    <!-- Form Results -->
    <FormResult />
  </form>
</template>

<script setup>
// Libraries
import { provide } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { Icon } from "@iconify/vue";

// Pinia
import { useLeadStore } from "../stores/LeadStore";

// Composables
import { useForm } from "../composables/useForm";

// Building-block components
import FieldGroup from "./FormElements/FieldGroup.vue";
import FieldError from "./FormElements/FieldError.vue";
import FieldLabel from "./FormElements/FieldLabel.vue";
import FormNav from "./FormElements/FormNav.vue";
import FormResult from "./FormElements/FormResult.vue";

/**
 * Expected props from parent
 */
const props = defineProps({
  formFields: {
    type: Array,
    default: null,
  },
});

/**
 * Vuelidate collector instance for showing errors
 */
const v = useVuelidate({ $stopPropagation: true });

/**
 * Pinia
 */
const store = useLeadStore();

/**
 * Composables
 */
const { formData, formState, validateField, onSubmit, back } = useForm(
  props.formFields.length,
  v.value.$silentErrors.length
);

// Provide
provide("validateField", validateField);
provide("formState", formState);
provide("formData", formData);

const updateField = (payload) => {
  store.$patch((state) => {
    state.formData[payload.key] = payload.value;
  });
};
</script>
