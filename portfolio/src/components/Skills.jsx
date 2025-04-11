import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3, FaDatabase, FaGit } from 'react-icons/fa';
import { SiCplusplus, SiTensorflow, SiPytorch } from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillLevelBar = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.primary};
  border-radius: 4px;
`;

const skills = [
  { name: 'Java', icon: <FaJava />, level: 90 },
  { name: 'Python', icon: <FaPython />, level: 90 },
  { name: 'C++', icon: <SiCplusplus />, level: 85 },
  { name: 'JavaScript', icon: <FaJs />, level: 85 },
  { name: 'React', icon: <FaReact />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
  { name: 'CSS3', icon: <FaCss3 />, level: 85 },
  { name: 'SQL', icon: <FaDatabase />, level: 80 },
  { name: 'TensorFlow', icon: <SiTensorflow />, level: 75 },
  { name: 'PyTorch', icon: <SiPytorch />, level: 70 },
  { name: 'Git', icon: <FaGit />, level: 85 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <SkillsSection id="skills">
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Skills
      </Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>
              <SkillLevelBar
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </SkillLevel>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 