import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContent = styled.footer`
  background: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const Email = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContent>
      <ContactInfo>
        <Email href="mailto:n-r-matias@outlook.com">
          <FaEnvelope /> n-r-matias@outlook.com
        </Email>
        <Phone>
          <FaPhone /> 832-745-2667
        </Phone>
      </ContactInfo>
      <SocialLinks>
        <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © {new Date().getFullYear()} Nicholas Matias. All rights reserved.
      </Copyright>
    </FooterContent>
  );
};

export default Footer; 