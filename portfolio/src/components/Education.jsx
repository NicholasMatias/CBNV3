import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';

const EducationSection = styled.section`
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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EducationIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondary};
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.accent};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      school: 'Texas A&M University',
      degree: 'M.S. in Artificial Intelligence (Fast-Track Program)',
      duration: 'August 2026 - May 2027',
      description: 'Fast-track program in Artificial Intelligence.',
    },
    {
      school: 'Texas A&M University',
      degree: 'B.S. in Computer Science, Minor in Mathematics',
      duration: 'August 2022 - May 2026',
      description: 'GPA: 3.736. Relevant Coursework: Data Structures and Algorithms, Computer Organization, Programming Languages, Program Design and Concepts, Discrete Structures Computing, Foundations of Software Engineering, Design and Analysis of Algorithms, Computer Systems.',
    },
  ];

  return (
    <EducationSection id="education">
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Education
      </Title>
      <EducationGrid>
        {education.map((edu, index) => (
          <EducationCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <EducationIcon>
              <FaGraduationCap />
            </EducationIcon>
            <SchoolName>{edu.school}</SchoolName>
            <Degree>{edu.degree}</Degree>
            <Duration>{edu.duration}</Duration>
            <Description>{edu.description}</Description>
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationSection>
  );
};

export default Education; 