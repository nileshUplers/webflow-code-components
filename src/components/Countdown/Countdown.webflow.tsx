import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { Countdown } from "./Countdown";

export default declareComponent(Countdown, {
  name: "Countdown Timer",
  description: "A premium countdown timer with real-time updates.",
  props: {
    title: props.String({
      name: "Title",
      defaultValue: "Coming Soon",
    }),
    description: props.String({
      name: "Description",
      defaultValue: "We're working hard to launch our new product. Stay tuned!",
    }),
    targetDate: props.String({
      name: "Target Date (ISO)",
      defaultValue: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    })
  },
});
