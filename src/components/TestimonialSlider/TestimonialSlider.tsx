import React, { useState, useEffect, useCallback } from 'react';
import './TestimonialSlider.css';

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface TestimonialSliderProps {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  delay?: number;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: "The attention to detail in these Webflow components is incredible. Our development time has been cut in half while the quality of our sites has skyrocketed.",
    author: "Sarah Johnson",
    role: "Creative Director at DesignFlow",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: '2',
    content: "I've tried many UI libraries, but this one stands out for its perfect balance of aesthetics and performance. The glassmorphism effects are subtle and premium.",
    author: "Michael Chen",
    role: "Senior Web Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    id: '3',
    content: "Integration was a breeze. Being able to edit React components directly inside the Webflow Designer is a game-changer for our hybrid workflow.",
    author: "Emma Williams",
    role: "Founder of WebScale",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
  }
];

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials = DEFAULT_TESTIMONIALS,
  autoplay = true,
  delay = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, testimonials.length]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(nextSlide, delay);
    return () => clearInterval(timer);
  }, [autoplay, delay, nextSlide]);

  return (
    <div className="wf-testimonial-slider">
      <div className="wf-testimonial-slider__container">
        <div 
          className="wf-testimonial-slider__track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="wf-testimonial-slider__slide">
              <div className="wf-testimonial-card">
                <svg className="wf-testimonial-card__quote-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017C11.4647 13 11.017 12.5523 11.017 12V9C11.017 7.34315 12.3601 6 14.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" />
                </svg>
                <p className="wf-testimonial-card__content">"{t.content}"</p>
                <div className="wf-testimonial-card__author">
                  {t.avatar && (
                    <img src={t.avatar} alt={t.author} className="wf-testimonial-card__avatar" />
                  )}
                  <h4 className="wf-testimonial-card__name">{t.author}</h4>
                  <p className="wf-testimonial-card__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="wf-testimonial-slider__arrow prev" onClick={prevSlide} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button className="wf-testimonial-slider__arrow next" onClick={nextSlide} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <div className="wf-testimonial-slider__pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`wf-testimonial-slider__dot ${index === currentIndex ? 'is-active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
