import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Main CTA (Call to Action) section with gradient background
const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #4a6dff 0%, #2541b2 100%);
  color: #fff;
  text-align: center;
`;

// Content container with max width
const CTAContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// CTA heading with responsive sizing
const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// CTA description text
const CTADescription = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Action button with hover effects
const CTAButton = styled(Link)`
  display: inline-block;
  padding: 15px 40px;
  background-color: #fff;
  color: var(--primary-color);
  border-radius: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;

/**
 * CTA (Call to Action) Component
 * 
 * This component serves as a conversion point to encourage visitors to take action.
 * Features:
 * - High-contrast gradient background to draw attention
 * - Compelling headline to engage visitors
 * - Supporting text to provide additional motivation
 * - Prominent button directing users to the contact form
 * 
 * The section remains centered on all device sizes for maximum impact and
 * maintains a clean, focused design to minimize distractions.
 */
const CTA: React.FC = () => {
  return (
    <CTASection>
      <CTAContainer>
        <CTATitle>Ready to Transform Your Educational Experience?</CTATitle>
        <CTADescription>
          Join Talko to provide your language school or college with a modern educational technology platform. Our solutions will help you improve teaching efficiency, enhance student engagement, and streamline management processes.
        </CTADescription>
        <CTAButton
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact Us Now
        </CTAButton>
      </CTAContainer>
    </CTASection>
  );
};

export default CTA; 