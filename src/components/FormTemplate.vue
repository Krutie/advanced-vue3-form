<template>
  <form class="form-template" @submit.prevent="submit">
    <template v-for="(field, key) in formFields" :key="`${key}-${field.name}`">
      <FieldGroup :field-id="key">
        <div class="field-area">
          <field-label :for="`${key}-${field.name}`">
            <h4> {{ field.label }} </h4>
          </field-label>
          <Component v-if="field.type === 'information'" :is="field.component" :text="field.text" />
          <Component v-else v-model="formData[field.name]" :is="field.component" v-bind="{ ...field.options.attrs }"
            :name="`${field.name}`" :validation="field.validation" :type="field.type" @change="
              updateField({
                key: field.name,
                value: formData[field.name],
              })
            " :options="!!field.options.choices ? field.options.choices : false" />
          <FieldError :buttonText="field.buttonText">
            <div class="input-errors" v-for="error of v.$errors" :key="error.$uid">
              <div class="error-msg">
                <Icon icon="ep:warning-filled" />
                {{ error.$message }}
              </div>
            </div>
          </FieldError>
        </div>
      </FieldGroup>
    </template>

    <!-- Next and Back Nav -->
    <form-nav @back="back" @next="submit" />

    <!-- Form Results -->
    <FormResult />
  </form>
</template>

<script setup>

// Libraries
import { provide } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { Icon } from '@iconify/vue';

// Pinia
import { useLeadStore } from "../stores/LeadStore";

// Composables
import { useMyForm } from '../composables/useMyForm';

// Building-block components
import FieldGroup from "./FormElements/FieldGroup.vue";
import FieldError from "./FormElements/FieldError.vue";
import FieldLabel from "./FormElements/FieldLabel.vue";
import FormNav from "./FormElements/FormNav.vue";
import FormResult from "./FormElements/FormResult.vue";

/** 
 * Expected props from parent
 */
const props = defineProps(["formFields"]);

/** 
 * Vuelidate collector instance for showing errors
 */
const v = useVuelidate({ $stopPropagation: true })

/** 
 * Pinia
 */
const store = useLeadStore();

/** 
 * Composables
 */
const { formData, formState, validateField, submit, back } = useMyForm(props.formFields.length)

// Provide
provide('validateField', validateField)
provide('formState', formState)
provide('formData', formData)

const updateField = (payload) => {
  store.$patch((state) => {
    state.formData[payload.key] = payload.value;
  });
};
</script>