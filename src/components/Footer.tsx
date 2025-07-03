import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';

// Main footer container with dark background
const FooterSection = styled.footer`
  background-color: var(--dark-color);
  color: #fff;
  padding: 60px 0 20px;
`;

// Content container with max width
const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Grid layout for footer columns
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

// Individual footer column
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

// Logo styling for footer
const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;

// Text content in footer with proper alignment
const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

// Column title with decorative underline
const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

// Container for footer links
const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Individual footer link item
const FooterLink = styled.li`
  margin-bottom: 10px;

  a {
    color: rgba(255, 255, 255, 0.7);
    transition: var(--transition);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    &:hover {
      color: #fff;
      transform: translateX(5px);
    }
  }
`;

// Bottom section with copyright and scroll-to-top button
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

// Copyright text
const FooterCopyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  
  @media (max-width: 576px) {
    text-align: center;
  }
`;

// Button to scroll back to top of page
const ScrollToTopButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

/**
 * Footer Component
 * 
 * This component provides the website footer with navigation and contact information.
 * Features:
 * - Multi-column layout that collapses responsively on smaller screens
 * - Quick navigation links to main site sections
 * - Contact information with icons
 * - Copyright notice with dynamically updated year
 * - Scroll-to-top button for improved user experience
 * 
 * The footer maintains proper text alignment across different screen sizes,
 * with left alignment for content (enhancing readability) and centered 
 * alignment for the copyright text on mobile.
 */
const Footer: React.FC = () => {
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <FooterLogo>Talko</FooterLogo>
            <FooterText>
              Talko is an innovative educational technology platform designed for language schools and colleges, helping to enhance teaching quality, streamline management processes, and boost student engagement.
            </FooterText>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Us
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Features
                </Link>
              </FooterLink>
              <FooterLink>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Us
                </Link>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact Info</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <a href="#">
                  {FaEnvelope({ size: 16 })} Contact us through the form
                </a>
              </FooterLink>
              <FooterLink>
                <a href="#">
                  {FaMapMarkerAlt({ size: 16 })} Turkey
                </a>
              </FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <FooterCopyright>
            &copy; {currentYear} Talko. All rights reserved.
          </FooterCopyright>
          <ScrollToTopButton
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {FaArrowUp({ size: 16 })}
          </ScrollToTopButton>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer; 