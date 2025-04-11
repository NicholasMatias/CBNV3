import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AnimatedBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 