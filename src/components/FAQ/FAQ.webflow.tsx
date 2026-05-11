import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { FAQ } from "./FAQ";

export default declareComponent(FAQ, {
  name: "FAQ Accordion",
  description: "A premium interactive FAQ accordion with smooth animations.",
  props: {
    title: props.String({
      name: "Section Title",
      defaultValue: "Frequently Asked Questions",
    }),
    allowMultiple: props.Boolean({
      name: "Allow Multiple Open",
      defaultValue: false,
    }),
    // For simplicity in the starter, we expose 3 fixed items
    q1: props.String({ name: "Question 1", defaultValue: "How do I integrate this?" }),
    a1: props.String({ name: "Answer 1", defaultValue: "Simply register the component using the @webflow/react library." }),
    q2: props.String({ name: "Question 2", defaultValue: "Is this responsive?" }),
    a2: props.String({ name: "Answer 2", defaultValue: "Yes, it looks great on all devices." }),
    q3: props.String({ name: "Question 3", defaultValue: "Can I customize the styles?" }),
    a3: props.String({ name: "Answer 3", defaultValue: "Absolutely! Modify the CSS or use Webflow variables." }),
  },
});
