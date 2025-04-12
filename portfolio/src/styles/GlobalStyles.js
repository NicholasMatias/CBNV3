import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    @media (max-width: 1200px) {
      font-size: 15px;
    }
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: ${({ theme }) => theme.transition};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    color: ${({ theme }) => theme.text};
  }

  section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      padding: 3rem 1.5rem;
    }
    
    @media (max-width: 480px) {
      padding: 2rem 1rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Better touch targets on mobile */
  @media (max-width: 768px) {
    button, a {
      min-height: 44px;
      min-width: 44px;
    }
  }
`; 