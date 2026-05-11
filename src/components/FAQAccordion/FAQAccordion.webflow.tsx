import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { FAQAccordion } from './FAQAccordion';

export default declareComponent(FAQAccordion, {
  name: 'FAQ Accordion',
  description: 'An interactive accordion for frequently asked questions.',
  group: 'Interactive',
  props: {
    title: props.String({
      name: 'Title',
      defaultValue: 'Frequently Asked Questions',
    }),
    allowMultiple: props.Boolean({
      name: 'Allow Multiple Open',
      defaultValue: false,
    }),
    q1: props.String({
      name: 'Question 1',
      defaultValue: 'How do I use this component?',
    }),
    a1: props.String({
      name: 'Answer 1',
      defaultValue: 'Simply drag it into your Webflow designer and update the props in the settings panel.',
    }),
    q2: props.String({
      name: 'Question 2',
      defaultValue: 'Can I customize the styles?',
    }),
    a2: props.String({
      name: 'Answer 2',
      defaultValue: 'Yes! The component uses global CSS variables, so any updates to your Webflow design tokens will automatically reflect here.',
    }),
    q3: props.String({
      name: 'Question 3',
      defaultValue: 'Is it accessible?',
    }),
    a3: props.String({
      name: 'Answer 3',
      defaultValue: 'It uses standard HTML elements and React state to manage visibility, making it easy to navigate.',
    }),
  },
});
