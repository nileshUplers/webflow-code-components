import React, { useState } from 'react';
import './FAQ.css';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  items?: FAQItem[];
  allowMultiple?: boolean;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  title = "Frequently Asked Questions",
  items,
  allowMultiple = false,
  q1, a1, q2, a2, q3, a3
}) => {
  // Use individual props if provided, otherwise fallback to items array or defaults
  const displayItems = items || [
    { question: q1 || "How do I integrate this?", answer: a1 || "Simply register the component using the @webflow/react library." },
    { question: q2 || "Is this responsive?", answer: a2 || "Yes, it looks great on all devices." },
    { question: q3 || "Can I customize the styles?", answer: a3 || "Absolutely! Modify the CSS or use Webflow variables." }
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => prev.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="wf-faq">
      <h2 className="wf-faq__title">{title}</h2>
      <div className="wf-faq__list">
        {displayItems.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index} className={`wf-faq__item ${isOpen ? 'is-open' : ''}`}>
              <button 
                className="wf-faq__header"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <span className="wf-faq__question">{item.question}</span>
                <span className="wf-faq__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className="wf-faq__body">
                <div className="wf-faq__content">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
