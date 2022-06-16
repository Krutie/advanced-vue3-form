import { ref, watch, inject, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core'
import { useValidation } from './useValidation';

export function useFormField(props) {

    const selectedValue = ref([]);

    /**
     * Validation Composable + Vuelidate
     */
    const { rules } = useValidation(props);
    const v$ = useVuelidate(rules, { selectedValue })

    /**
     * Inject
     */
    const validateField = inject('validateField')

    /**
     * when going `Back` to the previous form field
     * Check and set existing value if available
     */
    if (props.modelValue?.length > 0) selectedValue.value = props.modelValue

    onMounted(() => {
        /**
         * when going back to the previous form field
         * trigger validation on load
         */
        validateField(!v$.value.$invalid)
        if (!v$.value.$invalid) {
            validateField(!v$.value.$invalid)
        }
    })

    watch(v$, (v) => {
        /**
         * watch if initial validation changes
         */
        v.$invalid ? validateField(false) : validateField(true)
    })

    return {
        selectedValue
    }
}