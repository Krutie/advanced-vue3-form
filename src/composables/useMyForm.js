import { ref, computed, watch } from 'vue'
import gsap from "gsap"

export function useMyForm(formLength) {

    /**
     * Returned 
     * **/
    const formData = ref({})

    /**
     * Returned 
     * **/
    const formState = ref({
        activeField: 0,
        valid: false,
        next: true,
        formLength: formLength,
        isLastField: computed(() => {
            return formState.value.activeField === formLength
        }),
        isFirstField: computed(() => {
            return formState.value.activeField < 1
        }),
        errorLength: 0
    })

    /**
     * Returned 
     * **/
    function validateField(value) {
        formState.value.valid = value
    }

    /**
     * Returned 
     * **/
    function onSubmit() {
        console.log('Field Submitted')
        if (formState.value.errorLength > 0) {
            validateField(false)
        } else {
            validateField(true)
            next()
        }
    }

    function back() {
        formState.value.next = false
        formState.value.activeField--
    }

    function next() {
        formState.value.next = true
        formState.value.activeField++
    }

    return {
        formData, formState, validateField, onSubmit, back
    }
}