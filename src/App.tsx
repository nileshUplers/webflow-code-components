import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import ComponentsDisplayPage from './pages/ComponentsDisplayPage';
import WebflowVariablesPage from './pages/WebflowVariablesPage';
import DocumentationPage from './pages/DocumentationPage';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <div className="nav-logo">Webflow Starter</div>
          <div className="nav-right">
            <div className="nav-links">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
              <NavLink to="/components" className={({ isActive }) => isActive ? 'active' : ''}>Components</NavLink>
              <NavLink to="/variables" className={({ isActive }) => isActive ? 'active' : ''}>Variables</NavLink>
              <NavLink to="/docs" className={({ isActive }) => isActive ? 'active' : ''}>Guide</NavLink>
            </div>
            <button className="theme-toggle" onClick={toggleDarkMode} title="Toggle Theme">
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="page-container">
                <header className="page-header">
                  <h1>Welcome to Webflow Starter</h1>
                  <p>Get started by exploring your components and design variables.</p>
                </header>
                <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  <div className="component-card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>{5} Components</h2>
                    <p>Manage and preview your React components.</p>
                    <NavLink to="/components" className="badge" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>View Gallery</NavLink>
                  </div>
                  <div className="component-card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Variables</h2>
                    <p>Visualize your global design tokens.</p>
                    <NavLink to="/variables" className="badge" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>View Variables</NavLink>
                  </div>
                  <div className="component-card" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Documentation</h2>
                    <p>Full guide on adding components & variables.</p>
                    <NavLink to="/docs" className="badge" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>Read Guide</NavLink>
                  </div>
                </div>
              </div>
            } />
            <Route path="/components" element={<ComponentsDisplayPage />} />
            <Route path="/variables" element={<WebflowVariablesPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
