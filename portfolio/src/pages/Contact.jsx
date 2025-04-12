import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionContainer } from '../styles/shared';

const ContactSection = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
  padding: 120px 2rem 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  padding: 2.5rem;
  background: ${({ theme }) => theme.card};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  min-height: 200px;
  resize: vertical;
  font-size: 1.1rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary === '#FFFFFF' ? '#000000' : '#FFFFFF'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ContactSection id="contact">
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </Title>
      <Form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="6ccd759d-0ee9-49ae-98d8-177d71f84c9a" />
        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
        
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactSection>
  );
};

export default Contact; 