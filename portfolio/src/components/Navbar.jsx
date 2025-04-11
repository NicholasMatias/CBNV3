import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: ${({ theme }) => theme.card};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.button)`
  padding: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ background: scrolled ? 'rgba(0, 0, 0, 0.1)' : 'transparent' }}>
      <Logo
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nicholas Matias
      </Logo>
      <NavLinks>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#education">Education</NavLink>
        <ThemeToggle
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 