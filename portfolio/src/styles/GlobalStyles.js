import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: ${({ theme }) => theme.transition};
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
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`; 