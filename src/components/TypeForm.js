import { h } from "vue";
import { getComponent } from "./ComponentTypes";
import { useLeadStore } from "../stores/LeadStore";

const TypeForm = (props) => {
  let fieldObjects = props.formConfig.map((field) => {
    let component = getComponent(field.type);
    return { ...field, component };
  });
  // Set empty store for form data
  const store = useLeadStore();

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

  // return the render function
  return h(getComponent("formTemplate"), {
    formFields: fieldObjects,
  });
};

export default TypeForm;
