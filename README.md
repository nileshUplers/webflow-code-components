# Webflow Code Components Starter Boilerplate

This is a clean, reusable starter project for building custom code components for the Webflow Designer.

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Webflow CLI](https://developers.webflow.com/docs/webflow-cli) (installed as a dev dependency)

### 2. Setup
Clone this directory and install dependencies:
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file based on `.env.example` and add your Webflow API Token:
```bash
WEBFLOW_API_TOKEN="your_token_here"
```

### 4. Development
To start the local development server:
```bash
npm start
```

### 5. Webflow Syncing
To sync your components with Webflow:
```bash
npm run webflow:sync
```

To serve components to the Webflow Designer:
```bash
npm run webflow:serve
```

## Component Structure
Each component should follow this structure:
- `ComponentName.tsx`: React component logic and markup.
- `ComponentName.css`: Component-specific styles.
- `ComponentName.webflow.tsx`: Webflow property registration.
- `index.ts`: Export for the component.

## Global Styles
Manage global design tokens in `src/styles/webflow-variables.css`. These should ideally match your Webflow project variables.
