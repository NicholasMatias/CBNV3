import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNode, FaGitAlt, FaPython, FaJava, FaHtml5, 
  FaCss3Alt, FaDocker, FaAws, FaDatabase, FaGithub, FaFigma
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql, 
  SiPytorch, SiExpress, SiFirebase, SiTensorflow, SiScikitlearn,
  SiCplusplus, SiNumpy, SiPandas, SiPrisma,
  SiLatex, SiVite
} from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`;

const CarouselRow = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
  animation: scroll ${props => props.$duration}s linear infinite;
  animation-direction: ${props => props.$reverse ? 'reverse' : 'normal'};

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50% - 1rem));
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border};
  min-width: 120px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};
`;

const SkillName = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const row1Skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
  ];

  const row2Skills = [
    { name: 'MongoDB Atlas', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Prisma', icon: <SiPrisma /> },
    { name: 'LaTeX', icon: <SiLatex /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'GitHub', icon: <FaGithub /> },
  ];

  // Double the skills arrays for seamless looping
  const doubledRow1 = [...row1Skills, ...row1Skills];
  const doubledRow2 = [...row2Skills, ...row2Skills];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Skills
      </Title>
      <CarouselContainer>
        <CarouselRow $duration={40}>
          {doubledRow1.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </CarouselRow>
        <CarouselRow $duration={35} $reverse>
          {doubledRow2.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </CarouselRow>
      </CarouselContainer>
    </SkillsSection>
  );
};

export default Skills; 