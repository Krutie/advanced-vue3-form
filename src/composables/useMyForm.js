import { ref, computed } from 'vue'
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
        valid: true,
        next: true,
        formLength: formLength,
        isLast: computed(() => {
            return formState.value.activeField === formLength
        }),
        isFirst: computed(() => {
            return formState.value.activeField < 1
        }),
    })

    /**
     * Returned 
     * **/
    // function setValid(value) {
    function validateField(value) {
        formState.value.valid = value
    }

    /**
     * Returned 
     * **/
    function submit() {
        formState.value.next = true
        formState.value.valid ? proceed() : decline(".field-area")
    }

    function back() {
        formState.value.next = false
        formState.value.activeField--
    }

    function proceed() {
        formState.value.next = true
        formState.value.activeField++
    }

    function decline(element) {
        var tl = gsap.timeline({ repeat: 3 });
        tl.to(element, {
            duration: 0.2,
            // x: 30, 
            color: "#ef6574",
        });
        tl.to(element, {
            duration: 0.2,
            // x: 0,
            color: "#000",
            ease: "elastic.easeout(0.9, 0.1)",
        })
    }

    return {
        formData, formState, validateField, submit, back
    }
}