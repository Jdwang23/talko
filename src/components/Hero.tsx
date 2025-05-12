import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Main hero section container with background and spacing
const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: visible;
  padding-top: 70px;
  padding-bottom: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/hero-pattern.svg');
    opacity: 0.1;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 70px;
    height: auto;
  }
`;

// Content container with responsive layout
const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
`;

// Text content container
const HeroContent = styled.div`
  max-width: 600px;

  @media (max-width: 992px) {
    max-width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

// Main headline styling
const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
  line-height: 1.2;

  span {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-top: 20px;
    text-align: left;
  }
`;

// Subtitle/description text
const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

// Button wrapper to center the button on mobile
const ButtonWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

// Call-to-action button styling
const HeroButton = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  font-weight: 500;
  transition: var(--transition);
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

// Image container with floating animation
const HeroImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;

  img {
    width: 100%;
    height: auto;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 992px) {
    max-width: 80%;
    margin-bottom: 30px;
    align-self: center;
  }

  @media (max-width: 768px) {
    max-width: 70%;
    align-self: center;
  }
`;

/**
 * Hero Component - The main landing section of the website
 * 
 * Features:
 * - Responsive design for all screen sizes
 * - Left-aligned text for better readability on mobile
 * - Centered image and CTA button on mobile for visual focus
 * - Smooth animation for the hero image
 */
const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            Changing the Future of Education <span>Talkiy</span>
          </HeroTitle>
          <HeroSubtitle>
            Talkiy is an innovative educational technology platform designed specifically for language schools and colleges, helping you enhance teaching quality, streamline administrative processes, and boost student engagement.
          </HeroSubtitle>
          <ButtonWrapper>
            <HeroButton
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Get Started
            </HeroButton>
          </ButtonWrapper>
        </HeroContent>
        <HeroImage>
          <img src="/hero-image.svg" alt="Talkiy - EdTech Platform" />
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 