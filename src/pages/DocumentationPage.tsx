import React from 'react';
import './DocumentationPage.css';

const DocumentationPage: React.FC = () => {
  return (
    <div className="documentation-page">
      <header className="doc-hero">
        <h1>Webflow Development Guide</h1>
        <p>Your comprehensive guide to building, managing, and syncing React components with Webflow.</p>
      </header>

      <section className="doc-section">
        <h2>1. Initializing New Site Steps</h2>
        <div className="doc-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Clone & Install</h3>
            <p>Start by cloning the boilerplate and installing dependencies. This sets up the core architecture including the Webflow CLI integration.</p>
            <div className="code-block">
              git clone [repo-url]<br />
              cd webflow-starter-boilerplate<br />
              npm install
            </div>
          </div>
        </div>
        <div className="doc-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Configure Environment</h3>
            <p>Create a <code>.env</code> file in the root directory. You'll need your Webflow API Token to authenticate the CLI.</p>
            <div className="code-block">
              WEBFLOW_API_TOKEN="your_token_here"
            </div>
          </div>
        </div>
        <div className="doc-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Initialize Webflow Project</h3>
            <p>Run the init command to link this local codebase to your specific Webflow project.</p>
            <div className="code-block">
              npx webflow extension init
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>2. Adding New Components</h2>
        <p>Each component in this ecosystem consists of three essential files. Follow this structure to ensure seamless integration.</p>
        
        <div className="doc-grid">
          <div className="info-card">
            <h4>Logic (.tsx)</h4>
            <p>The core React component. Use standard React patterns, hooks, and props. Ensure it's exported for use in the registration file.</p>
          </div>
          <div className="info-card">
            <h4>Styles (.css)</h4>
            <p>Component-specific styling. Use CSS variables from the global tokens whenever possible to maintain consistency.</p>
          </div>
          <div className="info-card">
            <h4>Registration (.webflow.tsx)</h4>
            <p>This file defines how the component appears in the Webflow Designer. It maps React props to Webflow property inputs.</p>
          </div>
        </div>

        <div className="info-card" style={{ marginTop: '2rem', borderLeftColor: '#f39c12' }}>
          <h4>Example Registration</h4>
          <div className="code-block" style={{ fontSize: '0.8rem' }}>
            {`export default declareComponent(MyComponent, {
  name: "My Component",
  props: {
    title: props.String({ name: "Title", defaultValue: "Hello" })
  }
});`}
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>3. Managing Variables</h2>
        <p>Design tokens are managed globally to ensure your React components match your Webflow project's design system.</p>
        
        <div className="doc-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Update webflow-variables.css</h3>
            <p>Modify the variables in <code>src/styles/webflow-variables.css</code>. These tokens are used across all components.</p>
          </div>
        </div>
        
        <div className="doc-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Sync with Webflow</h3>
            <p>Use the sync command to push these variable definitions to your Webflow project, making them available in the Designer.</p>
            <div className="code-block">
              npm run webflow:sync
            </div>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h2>4. Full Guide: Adding to Webflow</h2>
        <p>Once your components are built, follow these steps to use them in the Webflow Designer.</p>
        
        <div className="doc-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Start Local Development</h3>
            <p>Run the dev server to preview components locally at <code>localhost:3000</code>.</p>
            <div className="code-block">npm start</div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Serve to Webflow</h3>
            <p>In a separate terminal, run the serve command. This creates a secure tunnel that Webflow uses to pull your local components.</p>
            <div className="code-block">npm run webflow:serve</div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Open Webflow Designer</h3>
            <p>Open your Webflow project, go to the App panel, and select your development app. Your local components will now appear in the 'Add' panel.</p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.6 }}>
        <p>&copy; 2024 Webflow Starter Boilerplate Documentation</p>
      </footer>
    </div>
  );
};

export default DocumentationPage;
