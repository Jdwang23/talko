import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// Header container with conditional styling based on scroll position
const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ scrolled }) => (scrolled ? '15px 0' : '20px 0')};
  background-color: ${({ scrolled }) => (scrolled ? '#fff' : 'rgba(255, 255, 255, 0.9)')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: var(--transition);
  z-index: 100;
`;

// Navigation container for logo and links
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Logo styling
const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  cursor: pointer;
`;

// Desktop navigation links container
const NavLinks = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Individual navigation link styling
const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--dark-color);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }
`;

// Mobile menu toggle button
const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  background: none;
  color: var(--dark-color);
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile menu container with animation for opening/closing
const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: transform 0.3s ease, opacity 0.3s ease;
  z-index: 99;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile navigation links container
const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Individual mobile navigation link styling
const MobileNavLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--dark-color);
  cursor: pointer;
  transition: var(--transition);
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:hover {
    color: var(--primary-color);
  }

  &.active {
    color: var(--primary-color);
  }
`;

/**
 * Header Component - Navigation bar with responsive design
 * 
 * Features:
 * - Changes appearance on scroll for better UX
 * - Responsive design with mobile menu
 * - Smooth scrolling navigation
 * - Active link highlighting
 */
const Header: React.FC = () => {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);
  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to detect scroll position and update header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu (when a link is clicked)
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <NavContainer>
          <Logo>Talko</Logo>
          <NavLinks>
            <NavLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              About Us
            </NavLink>
            <NavLink
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Features
            </NavLink>
            <NavLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
            >
              Contact
            </NavLink>
          </NavLinks>
          <MobileMenuButton onClick={toggleMobileMenu}>
            {mobileMenuOpen ? 'X' : '☰'}
          </MobileMenuButton>
        </NavContainer>
      </HeaderContainer>

      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileNavLinks>
          <MobileNavLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={closeMobileMenu}
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={closeMobileMenu}
          >
            About Us
          </MobileNavLink>
          <MobileNavLink
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={closeMobileMenu}
          >
            Features
          </MobileNavLink>
          <MobileNavLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={closeMobileMenu}
          >
            Contact
          </MobileNavLink>
        </MobileNavLinks>
      </MobileMenu>
    </>
  );
};

export default Header; 