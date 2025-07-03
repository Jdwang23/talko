import React, { useState } from 'react';
import styled from 'styled-components';

// Main contact section container
const ContactSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
`;

// Content container with max width and centered alignment
const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Section title with responsive alignment
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: left;
  }
`;

// Section subtitle with responsive alignment
const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-color);
  max-width: 700px;
  margin: 0 auto 2.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: left;
    margin: 0 0 2.5rem;
    font-size: 1rem;
  }
`;

// Form wrapper with shadow and rounded corners
const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`;

// Form container with vertical layout
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Container for each form field group
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// Form field label
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--dark-color);
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

// Input field with focus effects
const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(74, 109, 255, 0.2);
  }
`;

// Submit button with hover state
const SubmitButton = styled.button`
  padding: 15px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 10px;

  &:hover {
    background-color: var(--accent-color);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Success message display after form submission
const SuccessMessage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: rgba(46, 204, 113, 0.1);
  border: 1px solid #2ecc71;
  border-radius: 5px;
  color: #2ecc71;
  font-weight: 500;
  margin-top: 20px;
`;

/**
 * ContactForm Component
 * 
 * This component provides a simple form for potential clients to reach out.
 * Features:
 * - Clean, user-friendly form design
 * - Validation for required fields
 * - Success message feedback after submission
 * - Responsive layout with optimized text alignment on mobile
 * 
 * In a production environment, this form would connect to a backend API
 * to process submissions. Currently, it simulates a successful submission
 * for demonstration purposes.
 */
const ContactForm: React.FC = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    institutionName: '',
    fullName: '',
    phone: ''
  });
  
  // State to track form submission status
  const [submitted, setSubmitted] = useState(false);

  // Handler for input field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can add the actual form submission logic
    // For example: sending data to an API endpoint
    // Here we are just simulating a successful submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionSubtitle>
          Fill out the form below to learn how Talko can support your educational institution
        </SectionSubtitle>

        <FormWrapper>
          {!submitted ? (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Institution Name</Label>
                <Input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your school or institution name"
                />
              </FormGroup>

              <FormGroup>
                <Label>Your Name</Label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </FormGroup>

              <FormGroup>
                <Label>Contact Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your contact phone number"
                />
              </FormGroup>

              <SubmitButton type="submit">
                Submit
              </SubmitButton>
            </Form>
          ) : (
            <SuccessMessage>
              Thank you for contacting us! Our team will be in touch with you soon.
            </SuccessMessage>
          )}
        </FormWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactForm; 