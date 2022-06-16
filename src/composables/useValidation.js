import { computed } from 'vue'
import { minLength, required, email, numeric, helpers } from '@vuelidate/validators'

export function useValidation(props) {
    /**
     * values available in props
     * props.type
     * props.validation.minLength
     * props.validation.required
     * props.name
     */

    const validationMessage = computed(() => {
        if (props.type === "check") {
            return `Minimum ${props.validation.minLength} ${props.name} required.`
        }
        return `Minimum ${props.validation.minLength} characters required for ${props.name}.`
    })
    const rules = computed(() => ({
        /**
         * Can also have custom properties attached with validation 
         * answer: helpers.withParams({ 'key': props.name }, (value) => value),
        */
        selectedValue: {
            required: props.validation.required ? helpers.withMessage(`${props.name} cannot be empty.`, required) : false,
            minLength: props.validation.minLength ? helpers.withMessage(validationMessage.value, minLength(props.validation.minLength)) : false,
            email: props.validation.email ? helpers.withMessage('Must be a valid email address.', email) : false,
            numeric: props.validation.numeric ? helpers.withMessage('Must use all numbers.', numeric) : false,
            $autoDirty: true,
        },
    }))

    return {
        rules
    }
}