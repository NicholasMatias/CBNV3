import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
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
        <Intro />
        <Education />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Hobbies />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App; 