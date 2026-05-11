import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { TestimonialCard } from "./TestimonialCard";

export default declareComponent(TestimonialCard, {
  name: "Testimonial Card",
  description: "A premium standalone testimonial card.",
  props: {
    content: props.String({
      name: "Quote Content",
      defaultValue: "This component library has completely transformed our workflow. The attention to detail and design quality are unmatched in the Webflow ecosystem.",
    }),
    author: props.String({
      name: "Author Name",
      defaultValue: "Alex Rivera",
    }),
    role: props.String({
      name: "Author Role",
      defaultValue: "Lead UI Designer",
    }),
    avatar: props.String({
      name: "Avatar URL",
      defaultValue: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    }),
    rating: props.Number({
      name: "Rating (1-5)",
      defaultValue: 5,
    }),
  },
});
