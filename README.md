# Advanced Vue 3 Form 
This is a revised version of distraction-free-form example that was created back in July 2019.

#### This Typeform like form uses: Vue 3, Vuelidate and Animate.css
- Vue 3, 
- Composables, 
- Provide/Inject, 
- Vuelidate 
- Animate.css

#### Vue 2 links for reference:
[Legacy repo](https://github.com/Krutie/distraction-free-vue-form)
[Legacy demo](http://distraction-free-vue-form.surge.sh/)

#### Vue 3 Links
[Vue 3 Demo](https://advanced-vue3-form.surge.sh/)

#### Full concept

![Project Image](/docs/images/Full-Concept.png)

## What's new

The ideas described in **[Building an Interactive and Distraction-free Form with Vue](https://medium.com/vue-mastery/building-an-interactive-and-distraction-free-form-with-vue-bfe23907e981)** article still applies here in this Vue 3 example. 

However, there are some technical differences that follow new Vue 3 convetions as below: 

### Render functions in Vue 3

- function to create virtual node was available in render() function by default in Vue 2, this same function need to be imported from vue 3 now. Here's the signature of the new render function in Vue 3

![Project Image](/docs/images/Render-Function.png)

### Functional components in Vue 3

Everything we knew about functional component in Vue 2 is true for Vue 3 as well. However, there are some differences in how we write functional component in Vue 3. 

- functional component got the same signature as setup() function
- No need to define `function:true`


```js
// MyComponent.js (functional)
function MyComponent(props, { slots, emit, attrs }) {

    // return the render function
    return () => h('div', props.message)
}
```

### From mixins to composables

Back in Vue 2 example, we used mixins to share the state and data of the form. That same mixin is now converted into `useForm` composable, that provides formState, formData and other helper methods to navigate individual fields within the form. 

![Project Image](/docs/images/FormMixins-Methods.png)

### From Vuex to Pinia

Back in Vue 2 example, we used Vuex store to create empty store based on form configuration. In this Vue 3 example, we use Pinia to create empty store. 

```js
// src/components/VueForm.js
  props.formConfig.forEach((field) => {
    switch (field.type) {
      case "checkbox":
        return (store.formData[field.name] = []);
      case "radio":
        return (store.formData[field.name] = "");
      default:
        return (store.formData[field.name] = "");
    }
  });
```

### Vuelidate and 3 composables

Unlike previous example, Vuelidate is used for form validation. There are two custom composables, useFormField and useValidation along with useVulidate composable that's provided by Vuelidate - all three of these composables take care of individual field validation before we can move onto the next step in the form.

![Project Image](/docs/images/Form-Template.png)

### Provide Inject

Reactive provide/inject is used to make sure formState is available in child components that are not in the direct hierarchy.

```js
// src/components/FormTemplate.vue

provide("vueform", {
  validateField,
  formState,
});
```

### $attrs in Vue 3

Back in Vue 2, $attrs were applied to component by simply using `v-bind="{ ...field.options.attrs }"`

```html
    <Component v-model="formData[field.name]" :is="field.component" v-bind="{ ...field.options.attrs }"/>
```

In Vue 3, $attrs are passed the same way, `v-bind="{ ...field.options.attrs }"`, but then they are available using `$attrs`.

```html
<input :placeholder="$attrs['placeholder']" />
```