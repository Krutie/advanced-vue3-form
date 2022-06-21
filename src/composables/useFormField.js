import { ref, watch, inject, onMounted } from "vue";
import useVuelidate from "@vuelidate/core";
import { useValidation } from "./useValidation";

export function useFormField(props) {
  const selectedValue = ref([]);

  /**
   * Validation Composable + Vuelidate
   */
  const { rules } = useValidation(props.field);
  const v$ = useVuelidate(rules, { selectedValue });

  /**
   * Inject
   */
  const { formState, validateField } = inject("vueform");

  onMounted(() => {
    // record initial error length
    formState.value.errorLength = v$.value.$silentErrors.length;

    // use this for upfront field validation
    // validateField(formState.value.errorLength === 0)
  });

  /**
   * when going `Back` to the previous form field
   * Check and set existing value if available
   */
  if (props.modelValue?.length > 0) selectedValue.value = props.modelValue;

  watch(v$, (v) => {
    /**
     * watch if initial validation changes
     */
    formState.value.errorLength = v.$silentErrors.length;
    validateField(formState.value.errorLength === 0);
  });

  const vFocus = {
    mounted: (el) => el.focus(),
  };

  return {
    selectedValue,
    vFocus,
  };
}
