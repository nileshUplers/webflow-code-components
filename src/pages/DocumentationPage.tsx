import React from 'react';
import './DocumentationPage.css';

const DocumentationPage: React.FC = () => {
  return (
    <div className="documentation-page">
      <header className="doc-hero">
        <h1>Webflow Development Guide</h1>
        <p>Your team's step-by-step reference for building, previewing, and importing React components into Webflow.</p>
      </header>

      {/* ── SECTION 1: Getting Started ── */}
      <section className="doc-section">
        <h2>1. Getting Started</h2>

        <div className="doc-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Clone &amp; Install</h3>
            <p>Clone this repository and install all dependencies:</p>
            <div className="code-block">
              git clone https://github.com/nileshUplers/webflow-code-components.git<br />
              cd webflow-code-components<br />
              npm install
            </div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Configure Environment</h3>
            <p>Create a <code>.env</code> file in the root directory based on <code>.env.example</code>:</p>
            <div className="code-block">
              WEBFLOW_API_TOKEN="your_token_here"
            </div>
            <p style={{ marginTop: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
              💡 If no token is found, the CLI will open a browser for Workspace authorization when you run the import command.
            </p>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Preview Locally</h3>
            <p>Start the local preview server to see all components and variables in the browser:</p>
            <div className="code-block">npm start</div>
            <p style={{ marginTop: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
              Opens <code>http://localhost:3000</code> — use the <strong>Components</strong>, <strong>Variables</strong>, and <strong>Guide</strong> tabs.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Project Structure ── */}
      <section className="doc-section">
        <h2>2. Project Structure</h2>
        <p>Here's what matters and where things live:</p>
        <div className="code-block" style={{ lineHeight: 1.9 }}>
          src/<br />
          ├── components/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# All Webflow components live here<br />
          │&nbsp;&nbsp;&nbsp;└── FAQ/<br />
          │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── FAQ.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# React component (HTML/CSS/JS logic)<br />
          │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── FAQ.css&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Component styles<br />
          │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── FAQ.webflow.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Webflow property registration<br />
          │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── index.ts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Re-export (don't touch)<br />
          │<br />
          ├── pages/<br />
          │&nbsp;&nbsp;&nbsp;├── ComponentsDisplayPage.tsx&nbsp;&nbsp;&nbsp;# Register new components here to preview<br />
          │&nbsp;&nbsp;&nbsp;├── WebflowVariablesPage.tsx&nbsp;&nbsp;&nbsp;&nbsp;# Auto-displays all CSS variables<br />
          │&nbsp;&nbsp;&nbsp;└── DocumentationPage.tsx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# This page<br />
          │<br />
          └── styles/<br />
          &nbsp;&nbsp;&nbsp;&nbsp;└── webflow-variables.css&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Global design tokens
        </div>
      </section>

      {/* ── SECTION 3: Adding a New Component ── */}
      <section className="doc-section">
        <h2>3. Adding a New Component</h2>
        <p>Think of it as writing a normal HTML/CSS component — the React part is minimal.</p>

        <div className="doc-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Create the Component Folder</h3>
            <p>Inside <code>src/components/</code>, create a new folder named after your component:</p>
            <div className="code-block">src/components/MyCard/</div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Write the React Component — <code>MyCard.tsx</code></h3>
            <p>This is your HTML + CSS structure. Use <code>className</code> instead of <code>class</code>. Props with <code>?</code> are optional and can have a default value after <code>=</code>:</p>
            <div className="code-block">
              {`import React from 'react';
import './MyCard.css';

interface MyCardProps {
  title?: string;
  description?: string;
}

export const MyCard = ({ title = 'Hello', description = 'World' }: MyCardProps) => {
  return (
    <div className="my-card">
      <h2 className="my-card__title">{title}</h2>
      <p className="my-card__description">{description}</p>
    </div>
  );
};`}
            </div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Write the Styles — <code>MyCard.css</code></h3>
            <p>Plain CSS. Always use global variables from <code>src/styles/webflow-variables.css</code>:</p>
            <div className="code-block">
              {`.my-card {
  padding: var(--wf-spacing--lg);
  border-radius: var(--wf-border-radius--base);
  background-color: var(--wf-color--white);
  box-shadow: var(--wf-shadow--md);
}

.my-card__title {
  font-size: var(--wf-font-size--2xl);
  font-weight: var(--wf-font-weight--bold);
  color: var(--wf-color--primary);
}

.my-card__description {
  font-size: var(--wf-font-size--base);
  color: var(--wf-color--gray-dark);
}`}
            </div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Register for Webflow — <code>MyCard.webflow.tsx</code></h3>
            <p>This tells Webflow what props designers can edit in the Designer panel:</p>
            <div className="code-block">
              {`import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { MyCard } from './MyCard';

export default declareComponent(MyCard, {
  name: 'My Card',
  description: 'A simple card component.',
  group: 'Cards',
  props: {
    title: props.String({
      name: 'Title',
      defaultValue: 'Hello',
    }),
    description: props.String({
      name: 'Description',
      defaultValue: 'World',
    }),
  },
});`}
            </div>

            <p style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>Available prop types:</p>
            <div className="doc-grid" style={{ marginTop: 0 }}>
              {[
                { type: 'props.String()', use: 'Any text field' },
                { type: 'props.Text()', use: 'Long-form / paragraph text' },
                { type: 'props.Boolean()', use: 'On / Off toggles' },
                { type: 'props.Number()', use: 'Numeric values' },
                { type: 'props.Variant()', use: 'Dropdown with fixed options' },
                { type: 'props.Color()', use: 'Color picker' },
                { type: 'props.Image()', use: 'Image upload' },
                { type: 'props.Link()', use: 'URL / link field' },
              ].map(({ type, use }) => (
                <div className="info-card" key={type} style={{ margin: 0 }}>
                  <h4><code>{type}</code></h4>
                  <p style={{ margin: 0 }}>{use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Create the Index Export — <code>index.ts</code></h3>
            <p>Just one line — this lets other files import cleanly:</p>
            <div className="code-block">export * from './MyCard';</div>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>Add it to the Preview Page</h3>
            <p>Open <code>src/pages/ComponentsDisplayPage.tsx</code> and add your component in two places:</p>
            <p><strong>At the top — import it:</strong></p>
            <div className="code-block">
              {`import { MyCard } from '../components/MyCard';`}
            </div>
            <p style={{ marginTop: '1rem' }}><strong>Inside the <code>components</code> array — add a preview entry:</strong></p>
            <div className="code-block">
              {`{
  name: 'My Card',
  description: 'A simple card with title and description.',
  render: <MyCard />
},`}
            </div>
            <p style={{ marginTop: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
              Now run <code>npm start</code> and check the <strong>Components</strong> tab to see it live.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CSS Variables & Design Tokens ── */}
      <section className="doc-section">
        <h2>4. Managing CSS Variables</h2>
        <p>
          The Webflow Code Components CLI <strong>does not push CSS variables</strong> into Webflow automatically. 
          Variables must be managed manually to ensure the Webflow Designer remains the source of truth.
        </p>

        <div className="doc-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Create the Variable in Webflow</h3>
            <p>Your designer creates the Design Token (Color, Spacing, Font) in the Webflow Designer's <strong>Variables</strong> panel.</p>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Get the Exact CSS Name</h3>
            <p>Hover over the new variable in Webflow, click the settings icon (or right-click), and select <strong>Copy CSS variable</strong>.</p>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Mirror it Locally</h3>
            <p>Open <code>src/styles/webflow-variables.css</code> and paste the variable into the <code>:root {'{}'}</code> block so your React preview matches Webflow:</p>
            <div className="code-block">
              {`:root {
  /* Paste the exact name Webflow generated */
  --wf-color--accent: #ff6b6b;
}`}
            </div>
          </div>
        </div>

        <div className="info-card" style={{ marginTop: '1.5rem' }}>
          <h4>Why the <code>--wf-</code> prefix?</h4>
          <p style={{ margin: '0.5rem 0', fontSize: '0.9rem', lineHeight: 1.5 }}>
            It's a naming convention (namespace) used to instantly distinguish <strong>Global Webflow Tokens</strong> from <strong>Local Component Variables</strong> (like <code>--button-padding</code>). You aren't strictly required to use it, as long as your local CSS variable names perfectly match the CSS variables Webflow generates!
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            💡 After adding a variable locally, check the <strong>Variables</strong> tab in the local preview — it auto-displays all <code>--wf-</code> variables.
          </p>
        </div>
      </section>

      {/* ── SECTION 5: Upload to Webflow ── */}
      <section className="doc-section">
        <h2>5. Upload to Webflow</h2>
        <p>Once your component is ready, bundle and upload it to your Webflow Workspace:</p>

        <div className="doc-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Run the Import Command</h3>
            <div className="code-block">npm run webflow:import</div>
            <p style={{ marginTop: '0.75rem', opacity: 0.8, fontSize: '0.9rem' }}>
              The CLI will: check your <code>.env</code> for the API token → bundle all <code>*.webflow.tsx</code> files → upload the library to your Workspace.
            </p>
          </div>
        </div>

        <div className="doc-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Install the Library in Webflow</h3>
            <p>In the Webflow Designer:</p>
            <ol style={{ lineHeight: 2 }}>
              <li>Press <code>L</code> → find your library → click <strong>Install</strong>.</li>
              <li>Press <code>⇧C</code> → find your component under its group.</li>
              <li>Drag it onto the canvas.</li>
              <li>Edit props in the <strong>Properties panel</strong> on the right.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Quick Reference ── */}
      <section className="doc-section">
        <h2>6. Quick Reference</h2>
        <div className="doc-grid">
          <div className="info-card" style={{ margin: 0 }}>
            <h4>📦 npm Commands</h4>
            <p><code>npm start</code> — local preview server</p>
            <p><code>npm run webflow:import</code> — upload to Webflow</p>
            <p><code>npm run build</code> — production bundle</p>
          </div>
          <div className="info-card" style={{ margin: 0 }}>
            <h4>📁 Key Files</h4>
            <p><code>src/components/</code> — components</p>
            <p><code>src/styles/webflow-variables.css</code> — design tokens</p>
            <p><code>src/pages/ComponentsDisplayPage.tsx</code> — preview registration</p>
            <p><code>webflow.json</code> — library config</p>
          </div>
          <div className="info-card" style={{ margin: 0 }}>
            <h4>🔗 Further Reading</h4>
            <p><a href="https://developers.webflow.com/code-components/define-code-component" target="_blank" rel="noreferrer">Define a Code Component</a></p>
            <p><a href="https://developers.webflow.com/code-components/reference/prop-types" target="_blank" rel="noreferrer">Prop Types Reference</a></p>
            <p><a href="https://developers.webflow.com/code-components/reference/cli" target="_blank" rel="noreferrer">Webflow CLI Reference</a></p>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.6 }}>
        <p>Webflow Code Components Boilerplate — Team Guide</p>
      </footer>
    </div>
  );
};

export default DocumentationPage;
