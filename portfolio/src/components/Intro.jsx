import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { SectionContainer } from '../styles/shared';

const IntroSection = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const IntroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.primary};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};
  border-radius: 5px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border: 2px solid ${({ theme }) => theme.primary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #FFD700, #DAA520, #FFD700);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.3);
    
    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Intro = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <IntroSection id="intro">
      <IntroContent>
        <ProfileImage
          src="/headshot.png"
          alt="Nicholas Matias"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        <TextContent>
          <Title
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm Nicholas Matias
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Software Engineer & AI Enthusiast
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a passionate software engineer with a strong interest in artificial intelligence and machine learning. 
            I love building innovative solutions that solve real-world problems and make a positive impact. 
            With expertise in full-stack development and experience in AI, I'm always eager to take on new challenges and learn new technologies.
          </Description>
          <ResumeButton
            href="NRM_Resume_2025_NG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            View My Resume
          </ResumeButton>
        </TextContent>
      </IntroContent>
    </IntroSection>
  );
};

export default Intro; 