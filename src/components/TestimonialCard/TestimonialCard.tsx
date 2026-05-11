import React from 'react';
import './TestimonialCard.css';

export interface TestimonialCardProps {
  content?: string;
  author?: string;
  role?: string;
  avatar?: string;
  rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content = "This component library has completely transformed our workflow. The attention to detail and design quality are unmatched in the Webflow ecosystem.",
  author = "Alex Rivera",
  role = "Lead UI Designer",
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  rating = 5
}) => {
  return (
    <div className="wf-testimonial-card-standalone">
      <svg className="wf-testimonial-card-standalone__quote-icon" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 7.34315 12.3601 6 14.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
      </svg>
      
      <div className="wf-testimonial-card-standalone__rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: i < rating ? '#fbbf24' : 'var(--glass-border)' }}>★</span>
        ))}
      </div>

      <p className="wf-testimonial-card-standalone__content">"{content}"</p>
      
      <div className="wf-testimonial-card-standalone__footer">
        {avatar && (
          <img src={avatar} alt={author} className="wf-testimonial-card-standalone__avatar" />
        )}
        <div className="wf-testimonial-card-standalone__info">
          <h4 className="wf-testimonial-card-standalone__name">{author}</h4>
          <p className="wf-testimonial-card-standalone__role">{role}</p>
        </div>
      </div>
    </div>
  );
};
