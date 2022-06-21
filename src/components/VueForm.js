import { h } from "vue";
import { getComponent } from "./ComponentTypes";
import { useLeadStore } from "../stores/LeadStore";

const VueForm = (props) => {
  // Setup empty store for form data
  const store = useLeadStore();

  props.formConfig.forEach((field) => {
    switch (field.type) {
      case "checkbox":
        return (store.formData[field.name] = []);
      case "radio":
        return (store.formData[field.name] = "");
      case "information":
        break;
      default:
        return (store.formData[field.name] = "");
    }
  });

  const formFields = props.formConfig.map((field) => {
    let component = getComponent(field.type);
    return { ...field, component };
  });

  // return the render function
  return h(getComponent("formTemplate"), { formFields });
};

export default VueForm;
