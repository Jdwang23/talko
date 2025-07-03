import React from 'react';
import styled from 'styled-components';
import { 
  FaLaptop, 
  FaMobileAlt, 
  FaChartLine, 
  FaUserGraduate, 
  FaClipboardList,
  FaTools 
} from 'react-icons/fa';

// Main features section container with background
const FeaturesSection = styled.section`
  padding: 100px 0;
  background-color: var(--light-color);
`;

// Content container with max width
const FeaturesContainer = styled.div`
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

// Section subtitle with max width
const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--secondary-color);
  margin-bottom: 3rem;
  text-align: center;
  max-width: 700px;
`;

// Grid layout for feature cards
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

// Individual feature card with hover effect
const FeatureCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

// Icon container for visual identification
const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: rgba(74, 109, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20px;
  color: var(--primary-color);
  font-size: 2rem;
`;

// Feature title with left alignment for better readability
const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--dark-color);
  text-align: left;
`;

// Feature description with left alignment
const FeatureDescription = styled.p`
  font-size: 1rem;
  color: var(--secondary-color);
  line-height: 1.6;
  flex-grow: 1;
  text-align: left;
`;

// TypeScript interface for feature items
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Features Component
 * 
 * This component displays the platform's key features in a responsive grid layout.
 * Each feature is presented in a card with:
 * - Distinctive icon for visual identification
 * - Clear title highlighting the feature
 * - Brief description explaining the benefit
 * 
 * The grid layout adjusts from 3 columns on desktop to 1 column on mobile,
 * ensuring optimal readability across all devices.
 */
const Features: React.FC = () => {
  // Feature data with icons, titles and descriptions
  const features: Feature[] = [
    {
      icon: FaLaptop({ size: 32 }),
      title: 'Interactive Learning Platform',
      description: 'Providing an immersive learning environment that enhances the learning experience through multimedia content, quizzes, and interactive exercises, encouraging active student participation.'
    },
    {
      icon: FaMobileAlt({ size: 32 }),
      title: 'Mobile Learning Support',
      description: 'Accessible on any device, allowing students to learn anytime, anywhere, while teachers can answer questions and provide feedback on the go.'
    },
    {
      icon: FaChartLine({ size: 32 }),
      title: 'Data-Driven Teaching',
      description: 'Through detailed learning analytics and reports, helping teachers understand student performance, identify areas for improvement, and adjust teaching methods accordingly.'
    },
    {
      icon: FaUserGraduate({ size: 32 }),
      title: 'Personalized Learning Paths',
      description: 'Tailoring learning materials and assignments to each student\'s abilities, progress, and learning style to ensure optimal learning outcomes.'
    },
    {
      icon: FaClipboardList({ size: 32 }),
      title: 'Intelligent Assessment System',
      description: 'Auto-graded exercises and tests with immediate feedback help students understand mistakes while saving teachers valuable time for more meaningful teaching activities.'
    },
    {
      icon: FaTools({ size: 32 }),
      title: 'Comprehensive Management Tools',
      description: 'Simplifying administrative tasks such as student registration, course scheduling, and grade tracking, enabling schools to operate more efficiently with reduced administrative burden.'
    }
  ];

  return (
    <FeaturesSection id="features">
      <FeaturesContainer>
        <SectionTitle>Platform Features</SectionTitle>
        <SectionSubtitle>
          Talko provides a comprehensive suite of features to help language education institutions achieve excellence in teaching
        </SectionSubtitle>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features; 