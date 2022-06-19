import FormTemplate from "./FormTemplate.vue";
import InputBox from "./FormElements/Fields/InputBox.vue";
import TextArea from "./FormElements/Fields/TextArea.vue";
import RadioButton from "./FormElements/Fields/RadioButton.vue";
import CheckBox from "./FormElements/Fields/CheckBox.vue";
import InfoBlock from "./FormElements/Fields/InfoBlock.vue";

const COMPONENT_MAP = {
  formTemplate: FormTemplate,
  text: InputBox,
  textarea: TextArea,
  radio: RadioButton,
  checkbox: CheckBox,
  information: InfoBlock,
};

export function getComponent(type) {
  return COMPONENT_MAP[type];
}
