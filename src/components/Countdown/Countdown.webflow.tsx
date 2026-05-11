import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { Countdown } from './Countdown';

export default declareComponent(Countdown, {
  name: 'Countdown Timer',
  description: 'A real-time countdown timer to a specific date. Demonstrates React hooks (useState, useEffect).',
  group: 'Advanced',
  props: {
    targetDate: props.String({
      name: 'Target Date',
      defaultValue: '2026-01-01T00:00:00',
    }),
    title: props.String({
      name: 'Title',
      defaultValue: 'Countdown',
    }),
    showLabels: props.Boolean({
      name: 'Show Labels',
      defaultValue: true,
    }),
  },
});
