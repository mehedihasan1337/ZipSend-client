import React, { useState, useRef, useEffect } from 'react';
import './TestimonialsStyles.css';

const testimonials = [
  { quote: "Postura Pro changed my life!", name: "Alice Rahman", role: "Yoga Instructor" },
  { quote: "My back pain is gone. Highly recommend!", name: "Tanvir Hasan", role: "Software Engineer" },
  { quote: "I feel more confident with better posture.", name: "Nusrat Jahan", role: "Marketing Manager" },
  { quote: "Simple, effective, and comfortable.", name: "Rafiul Islam", role: "Graphic Designer" },
  { quote: "Great support and alignment all day.", name: "Mehedi Hasan", role: "Fitness Coach" },
  { quote: "Postura Pro is a game changer!", name: "Farzana Akter", role: "Product Manager" },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  const scrollToCard = (index) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  useEffect(() => {
    scrollToCard(activeIndex);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section">
      <h2>What our customers are sayings</h2>
      <p className="description">
        Enhance posture, mobility, and well-being effortlessly with Postura Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      <div className="carousel-container">
        <button className="nav-button" onClick={handlePrev}>‹</button>

        <div className="carousel">
          {testimonials.map((t, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="quote">"{t.quote}"</div>
              <div className="name">{t.name}</div>
              <div className="role">{t.role}</div>
            </div>
          ))}
        </div>

        <button className="nav-button" onClick={handleNext}>›</button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
