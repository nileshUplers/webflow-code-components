import { Countdown } from '../components/Countdown';
import { FAQ } from '../components/FAQ';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { MultiStepForm } from '../components/MultiStepForm';
import { TestimonialCard } from '../components/TestimonialCard';

const ComponentsDisplayPage: React.FC = () => {
  const components = [
    {
      name: 'Testimonial Card',
      description: 'A premium standalone testimonial card with star ratings and hover effects.',
      render: <TestimonialCard />
    },
    {
      name: 'Multi-step Form',
      description: 'A premium lead capture form with progress tracking and Webflow database integration.',
      render: <MultiStepForm />
    },
    {
      name: 'Testimonial Slider',
      description: 'A premium, interactive testimonial carousel with glassmorphism and smooth transitions.',
      render: <TestimonialSlider />
    },
    {
      name: 'FAQ Accordion',
      description: 'A premium interactive FAQ accordion with smooth animations.',
      render: <FAQ />
    },
    {
      name: 'Countdown Timer',
      description: 'A premium real-time countdown timer with glassmorphism styling.',
      render: <Countdown />
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Component Library</h1>
        <p>Explore and test our collection of Webflow-ready React components.</p>
      </header>

      <div className="component-stack">
        {components.map((comp, idx) => (
          <section key={idx} className="component-section">
            <div className="component-info">
              <div className="component-meta">
                <span className="badge">React</span>
                <span className="badge secondary">Webflow Ready</span>
              </div>
              <h2 className="component-title">{comp.name}</h2>
              <p className="component-desc">{comp.description}</p>
            </div>
            <div className="component-full-preview">
              {comp.render}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ComponentsDisplayPage;
