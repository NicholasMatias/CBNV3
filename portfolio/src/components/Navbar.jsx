import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

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
  transition: background-color 0.3s ease;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transition: background-color 0.3s ease;
`;

const LogoImage = styled.img`
  margin-top: 10px;
  height: 100px;
  width: auto;
  transition: all 0.3s ease;
  pointer-events: none;
  user-select: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1rem;
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

const ThemeToggle = styled(motion.button)`
  padding: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.card};
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;

const MobileThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;
  width: 100%;
  transition: all 0.3s ease;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Nav style={{ 
        background: scrolled 
          ? `${theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)'}` 
          : 'transparent' 
      }}>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" onClick={(e) => handleNavClick(e, '/')}>
            <LogoImage 
              src="/CBN_Transparent.png" 
              alt="CBN Logo"
            />
          </Link>
        </Logo>
        <NavLinks>
          <NavLink to="/" onClick={(e) => handleNavClick(e, '/')}>Home</NavLink>
          <NavLink to="/projects" onClick={(e) => handleNavClick(e, '/projects')}>Projects</NavLink>
          <NavLink to="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Contact</NavLink>
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggle>
        </NavLinks>
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <MobileNavLink to="/" onClick={(e) => handleNavClick(e, '/')}>Home</MobileNavLink>
            <MobileNavLink to="/projects" onClick={(e) => handleNavClick(e, '/projects')}>Projects</MobileNavLink>
            <MobileNavLink to="/contact" onClick={(e) => handleNavClick(e, '/contact')}>Contact</MobileNavLink>
            <MobileThemeButton onClick={toggleTheme}>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </MobileThemeButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 