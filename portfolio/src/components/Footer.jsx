import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => 
      theme.mode === 'dark' 
        ? 'linear-gradient(to right, #FFD700, #B8860B)'
        : 'linear-gradient(to right, #FFDF00, #DAA520)'
    };
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};

    &::after {
      width: 100%;
    }
  }
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => 
      theme.mode === 'dark' 
        ? 'linear-gradient(to right, #FFD700, #B8860B)'
        : 'linear-gradient(to right, #FFDF00, #DAA520)'
    };
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};

    &::after {
      width: 100%;
    }
  }
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
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => 
      theme.mode === 'dark' 
        ? 'linear-gradient(to right, #FFD700, #B8860B)'
        : 'linear-gradient(to right, #FFDF00, #DAA520)'
    };
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};

    &::after {
      width: 100%;
    }
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
        <Phone >
          <FaPhone /> 832-745-2667
        </Phone>
      </ContactInfo>
      <SocialLinks>
        <SocialLink href="https://github.com/nicholasmatias" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/nicholasmatias" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/nicholasrmatias" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © 2023 CBN, Creations by Nick. All rights reserved.
      </Copyright>
    </FooterContent>
  );
};

export default Footer; 