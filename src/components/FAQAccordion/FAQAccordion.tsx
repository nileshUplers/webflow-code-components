import React, { useState } from 'react';
import './FAQAccordion.css';

interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  title?: string;
  allowMultiple?: boolean;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

export const FAQAccordion = ({
  title = 'Frequently Asked Questions',
  allowMultiple = false,
  q1 = 'How do I use this component?',
  a1 = 'Simply drag it into your Webflow designer and update the props in the settings panel.',
  q2 = 'Can I customize the styles?',
  a2 = 'Yes! The component uses global CSS variables, so any updates to your Webflow design tokens will automatically reflect here.',
  q3 = 'Is it accessible?',
  a3 = 'It uses standard HTML elements and React state to manage visibility, making it easy to navigate.',
}: FAQAccordionProps) => {
  // Build the items array from the individual props
  const items: FAQItem[] = [
    { question: q1, answer: a1 },
    { question: q2, answer: a2 },
    { question: q3, answer: a3 },
  ].filter(item => item.question && item.answer); // Only include items that have both a question and answer

  // Store the indices of currently open items.
  // Using an array allows us to support both single and multiple open items.
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openIndices.includes(index)) {
      // If it's already open, close it by removing it from the array
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // If it's closed, open it. 
      // If allowMultiple is true, add to array. Otherwise, replace array.
      setOpenIndices(allowMultiple ? [...openIndices, index] : [index]);
    }
  };

  return (
    <div className="wf-faq">
      {title && <h2 className="wf-faq__title">{title}</h2>}
      <div className="wf-faq__list">
        {items.map((item, index) => {
          const isOpen = openIndices.includes(index);
          
          return (
            <div 
              key={index} 
              className={`wf-faq__item ${isOpen ? 'wf-faq__item--open' : ''}`}
            >
              <button
                className="wf-faq__question"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="wf-faq__icon">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              {/* Only render the answer if this item is open */}
              {isOpen && (
                <div className="wf-faq__answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
