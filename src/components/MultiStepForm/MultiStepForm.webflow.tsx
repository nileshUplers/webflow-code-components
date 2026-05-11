import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { MultiStepForm } from "./MultiStepForm";

export default declareComponent(MultiStepForm, {
  name: "Multi-step Form",
  description: "A premium multi-step form that submits to the Webflow database.",
  props: {
    title: props.String({
      name: "Form Title",
      defaultValue: "Start Your Project",
    }),
    description: props.String({
      name: "Form Description",
      defaultValue: "Fill out the form below and we'll get back to you within 24 hours.",
    }),
    submitUrl: props.String({
      name: "Webflow Form Action URL",
      defaultValue: "",
    }),
    formName: props.String({
      name: "Webflow Form Name",
      defaultValue: "Premium Inquiry Form",
    }),
  },
});
