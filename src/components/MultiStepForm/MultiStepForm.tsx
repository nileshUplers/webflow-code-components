import React, { useState } from 'react';
import './MultiStepForm.css';

export interface MultiStepFormProps {
  formId?: string;
  formName?: string;
  submitUrl?: string;
  title?: string;
  description?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  formId = "custom-multistep-form",
  formName = "Premium Inquiry Form",
  submitUrl,
  title = "Start Your Project",
  description = "Fill out the form below and we'll get back to you within 24 hours."
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: 'Web Development',
    budget: '$5,000 - $10,000',
    message: ''
  });

  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Logic for Webflow Submission
      // If a submitUrl is provided (e.g. Webflow's form action URL), we post to it
      if (submitUrl) {
        const payload = new URLSearchParams();
        Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
        payload.append('formId', formId);
        payload.append('formName', formName);

        await fetch(submitUrl, {
          method: 'POST',
          body: payload,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
      } else {
        // Simulation for development
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form Data Submitted to Webflow:', formData);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="wf-step-form">
        <div className="wf-form-success">
          <div className="wf-form-success__icon">✓</div>
          <h2 className="wf-step-form__title">Message Received!</h2>
          <p className="wf-step-form__desc">Thank you for reaching out. Our team will contact you shortly at <strong>{formData.email}</strong>.</p>
          <button className="wf-button wf-button--primary" onClick={() => setIsSubmitted(false)}>Send Another Message</button>
        </div>
      </div>
    );
  }

  return (
    <div className="wf-step-form">
      <div className="wf-step-form__progress">
        <div 
          className="wf-step-form__progress-fill" 
          style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
        />
        {[1, 2, 3].map((num) => (
          <div 
            key={num} 
            className={`wf-step-form__step-indicator ${step === num ? 'is-active' : ''} ${step > num ? 'is-completed' : ''}`}
          >
            {step > num ? '✓' : num}
          </div>
        ))}
      </div>

      <header className="wf-step-form__header">
        <h2 className="wf-step-form__title">{title}</h2>
        <p className="wf-step-form__desc">{description}</p>
      </header>

      <form onSubmit={handleSubmit} className="wf-step-form__content">
        {step === 1 && (
          <div className="wf-step-form__fields">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div className="wf-form-group">
                <label className="wf-form-label">First Name</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                  required 
                  className="wf-form-input" 
                  placeholder="John"
                />
              </div>
              <div className="wf-form-group">
                <label className="wf-form-label">Last Name</label>
                <input 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleInputChange} 
                  required 
                  className="wf-form-input" 
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="wf-form-group">
              <label className="wf-form-label">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
                className="wf-form-input" 
                placeholder="john@example.com"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="wf-step-form__fields">
            <div className="wf-form-group" style={{ marginBottom: '1rem' }}>
              <label className="wf-form-label">Company Name</label>
              <input 
                type="text" 
                name="company" 
                value={formData.company} 
                onChange={handleInputChange} 
                className="wf-form-input" 
                placeholder="Acme Corp"
              />
            </div>
            <div className="wf-form-group" style={{ marginBottom: '1rem' }}>
              <label className="wf-form-label">Interested Service</label>
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleInputChange} 
                className="wf-form-input"
              >
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Webflow SEO</option>
                <option>Custom App</option>
              </select>
            </div>
            <div className="wf-form-group">
              <label className="wf-form-label">Project Budget</label>
              <select 
                name="budget" 
                value={formData.budget} 
                onChange={handleInputChange} 
                className="wf-form-input"
              >
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="wf-step-form__fields">
            <div className="wf-form-group">
              <label className="wf-form-label">Project Details</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
                className="wf-form-input" 
                placeholder="Tell us about your project goals..."
                style={{ minHeight: '150px', resize: 'vertical' }}
                required
              />
            </div>
          </div>
        )}

        <div className="wf-form-footer">
          <button 
            type="button" 
            className="wf-button wf-button--secondary" 
            onClick={handlePrev}
            style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
          >
            Back
          </button>
          
          {step < totalSteps ? (
            <button 
              type="button" 
              className="wf-button wf-button--primary" 
              onClick={handleNext}
              disabled={step === 1 && (!formData.firstName || !formData.email)}
            >
              Continue
            </button>
          ) : (
            <button 
              type="submit" 
              className="wf-button wf-button--primary" 
              disabled={isSubmitting || !formData.message}
            >
              {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
