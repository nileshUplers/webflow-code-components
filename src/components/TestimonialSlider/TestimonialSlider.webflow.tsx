import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { TestimonialSlider } from './TestimonialSlider';

declareComponent(TestimonialSlider, {
  name: "Testimonial Slider",
  description: "A premium sliding testimonial carousel.",
  props: {
    autoplay: props.Boolean({
      name: "Autoplay",
      defaultValue: true
    }),
    delay: props.Number({
      name: "Autoplay Delay (ms)",
      defaultValue: 5000
    })
  }
});
