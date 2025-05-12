import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Global styles applied to the entire application
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #4a6dff;
    --accent-color: #2541b2;
    --dark-color: #333;
    --secondary-color: #666;
    --light-color: #f5f7fa;
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--dark-color);
    line-height: 1.5;
    background-color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

/**
 * App Component
 * 
 * The main application component that assembles all sections of the website.
 * 
 * Structure:
 * 1. Header - Navigation bar with links to all sections
 * 2. Hero - Main landing section with headline and call-to-action
 * 3. About - Company information and core values
 * 4. Features - Platform features displayed in a card grid
 * 5. CTA - Call to action section with prominent button
 * 6. ContactForm - Form for potential clients to reach out
 * 7. Footer - Site navigation, contact info, and copyright
 * 
 * Global styles are applied through styled-components to maintain
 * consistent design variables and reset browser defaults.
 */
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Features />
      <CTA />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
