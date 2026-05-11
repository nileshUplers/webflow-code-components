# Webflow Code Components — Starter Boilerplate

A clean, reusable starter for building and importing custom React code components into the Webflow Designer using **DevLink**.

---

## Before You Start

Make sure you have the following:

- A **Webflow account** with either:
  - A Workspace on a **Freelancer, Core, Growth, Agency, or Enterprise** plan, or
  - A Webflow site on a **CMS, Business, or Enterprise** plan
- A Webflow site to test your components on
- **Node.js 20+** and **npm 10+** installed
- Basic familiarity with **React** and **TypeScript**

---

## Getting Started

### 1. Clone & Install Dependencies

Clone this repository and install all dependencies:

```bash
git clone https://github.com/nileshUplers/webflow-code-components.git
cd webflow-code-components
npm install
```

The following Webflow packages are already included as dev dependencies:

```bash
# These are pre-installed. Only run this if starting from scratch.
npm i --save-dev @webflow/webflow-cli @webflow/data-types @webflow/react
```

---

### 2. Configure Your Webflow Library

The `webflow.json` file in the root of the project defines your component library configuration:

```json
{
  "library": {
    "name": "Starter Component Library",
    "components": ["./src/**/*.webflow.@(js|jsx|mjs|ts|tsx)"]
  }
}
```

- **`name`**: The display name of your library in the Webflow Designer.
- **`components`**: Glob pattern pointing to all `.webflow.tsx` definition files.

---

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project based on `.env.example`:

```bash
WEBFLOW_API_TOKEN="your_token_here"
```

> The Webflow CLI will automatically pick up your token from this file during `devlink import`. If no token is found, it will prompt you to authenticate via browser.

---

### 4. Run the Local Preview Server

To preview components locally in the browser before syncing to Webflow:

```bash
npm start
```

This starts a React development server at `http://localhost:3000`, where you can visually inspect your components.

---

### 5. Define a Code Component

Each component follows a two-file pattern:

#### `ComponentName.tsx` — The React component

```tsx
import * as React from "react";

interface BadgeProps {
  text: string;
  variant: "Light" | "Dark";
}

export const Badge = ({ text, variant }: BadgeProps) => (
  <span
    style={{
      backgroundColor: variant === "Light" ? "#eee" : "#000",
      borderRadius: "1em",
      color: variant === "Light" ? "#000" : "#fff",
      display: "inline-block",
      fontSize: "14px",
      lineHeight: 2,
      padding: "0 1em",
    }}
  >
    {text}
  </span>
);
```

#### `ComponentName.webflow.tsx` — The Webflow component definition

```tsx
import { Badge } from "./Badge";
import { props } from "@webflow/data-types";
import { declareComponent } from "@webflow/react";

export default declareComponent(Badge, {
  name: "Badge",
  description: "A badge with variants",
  group: "Info",
  props: {
    text: props.Text({
      name: "Text",
      defaultValue: "Hello World",
    }),
    variant: props.Variant({
      name: "Variant",
      options: ["Light", "Dark"],
      defaultValue: "Light",
    }),
  },
});
```

The `declareComponent` function accepts:
| Option | Description |
|---|---|
| `name` | Display name in the Webflow Designer |
| `description` | *(optional)* Short description of the component |
| `group` | *(optional)* Grouping label in the components panel |
| `props` | *(optional)* Configurable properties designers can edit |
| `options` | *(optional)* Additional component options |

---

### 6. Import Your Library to Webflow

Run the following command to bundle and upload your component library to your Webflow Workspace:

```bash
npm run webflow:import
```

The CLI will:
1. **Authenticate**: Check for a token in `.env`. If not found, it opens a browser for Workspace authorization.
2. **Bundle**: Compile and bundle all `.webflow.tsx` files.
3. **Upload**: Push the library to your Workspace.

---

### 7. Install & Use in Webflow Designer

1. Open any site in your Webflow Workspace.
2. Press **`L`** to open the **Libraries panel**.
3. Find your library and click **Install**.
4. Press **`⇧C`** to open the **Components panel**.
5. Find your component under its group (e.g., "Info → Badge").
6. **Drag and drop** it onto the canvas.
7. Edit props in the **Properties panel** on the right.

---

## Component File Structure

```
src/
└── components/
    └── MyComponent/
        ├── MyComponent.tsx           # React component logic & markup
        ├── MyComponent.css           # Component-specific styles
        ├── MyComponent.webflow.tsx   # Webflow property registration
        └── index.ts                  # Re-export for clean imports
```

---

## Global Styles

Manage global design tokens in `src/styles/webflow-variables.css`. These CSS custom properties should mirror the variables defined in your Webflow project for seamless style consistency.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start local React preview server |
| `npm run build` | Build production bundle |
| `npm run webflow:import` | Bundle & upload library to Webflow |

---

## Further Reading

- [Quick Start — Importing Code Components](https://developers.webflow.com/code-components/importing/quick-start)
- [Define a Code Component](https://developers.webflow.com/code-components/define-code-component)
- [Prop Types Reference](https://developers.webflow.com/code-components/reference/prop-types)
- [Webflow CLI Reference](https://developers.webflow.com/code-components/reference/cli)
- [Bundling & Import](https://developers.webflow.com/code-components/bundling-and-import)
