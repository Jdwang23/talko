import React from 'react';
import styled from 'styled-components';
import { FaRocket, FaChalkboardTeacher, FaGlobeAmericas } from 'react-icons/fa';

// Main about section container with padding and background
const AboutSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
`;

// Content container with centered layout
const AboutContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Section title with decorative underline
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 1rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 3px;
    background-color: var(--primary-color);
  }
`;

// Section subtitle for brief introduction
const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin-bottom: 3rem;
  text-align: center;
  max-width: 700px;
`;

// Flex container for image and text content
const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

// Image container with responsive sizing and shadow
const AboutImage = styled.div`
  flex: 1;
  max-width: 500px;

  img {
    width: 100%;
    height: auto;
    // border-radius: 10px;
    // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 992px) {
    max-width: 80%;
    align-self: center;
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

// Text content container with responsive alignment
const AboutText = styled.div`
  flex: 1;

  @media (max-width: 992px) {
    width: 100%;
    text-align: left;
  }
`;

// Main description paragraph
const AboutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--secondary-color);
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    text-align: left;
  }
`;

// Feature items grid layout
const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

// Individual feature with icon and text
const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

// Circular container for feature icons
const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(74, 109, 255, 0.1);
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 1.5rem;
`;

// Container for feature title and description
const FeatureText = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--dark-color);
  }

  p {
    font-size: 0.9rem;
    color: var(--secondary-color);
  }
`;

/**
 * About Component
 * 
 * This component displays information about Talko, including:
 * - Company introduction and mission statement
 * - Main visual illustration
 * - Key features and unique selling points with icons
 * 
 * The component is fully responsive, with text alignment optimized 
 * for readability on both desktop and mobile devices.
 */
const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>About Talko</SectionTitle>
        <SectionSubtitle>
          We are innovators in the field of educational technology, dedicated to providing the most advanced teaching solutions for language schools and colleges
        </SectionSubtitle>

        <AboutContent>
          <AboutImage>
            <img src="/school.webp" alt="About Talko" />
          </AboutImage>

          <AboutText>
            <AboutDescription>
              Talko is a comprehensive educational technology Platform-as-a-Service (PaaS) solution designed specifically for language education institutions. Our platform combines advanced technology with pedagogical principles to create a seamless learning experience for teachers and students.
              <br /><br />
              Our mission is to empower education through technology, helping language schools improve teaching efficiency, enhance student engagement, and simplify management processes. The core value of the Talko platform lies in providing educators with the tools they need to focus on what matters most—teaching.
            </AboutDescription>

            <AboutFeatures>
              <FeatureItem>
                <FeatureIcon>
                  {FaRocket({ size: 24 })}
                </FeatureIcon>
                <FeatureText>
                  <h3>Innovation Driven</h3>
                  <p>We constantly explore the frontiers of educational technology</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon>
                  {FaChalkboardTeacher({ size: 24 })}
                </FeatureIcon>
                <FeatureText>
                  <h3>Education Centered</h3>
                  <p>All features are designed around educational outcomes</p>
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon>
                  {FaGlobeAmericas({ size: 24 })}
                </FeatureIcon>
                <FeatureText>
                  <h3>Global Perspective</h3>
                  <p>Supporting multilingual teaching and international needs</p>
                </FeatureText>
              </FeatureItem>
            </AboutFeatures>
          </AboutText>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 