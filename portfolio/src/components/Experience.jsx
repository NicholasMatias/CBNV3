import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = styled.section`
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

const ExperienceGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  height: 650px;
`;

const ExperienceIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Position = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondary};
`;

const Duration = styled.p`
  color: ${({ theme }) => theme.accent};
`;

const Description = styled.ul`
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  padding-left: 1.5rem;
  margin: 0;
`;

const BulletPoint = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  list-style-type: none;

  &::before {
    content: "•";
    color: ${({ theme }) => theme.primary};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Meta',
      position: 'Incoming Software Engineering Intern',
      duration: 'May 2025 - August 2025',
      description: [],
    },
    {
      company: 'Meta',
      position: 'Software Engineering Intern',
      duration: 'June 2024 - August 2024',
      description: [
        'Developed a full-stack web application, InterviewMe, capable of simulating a real-life behavioral interview through utilizing Whisper3 (speech-to-text), Llama3 (LLM), and Deepgram\'s text-to-speech API',
        'Implemented user-centric features including question up-voting, company tag management, and search/sort functionality, increasing user engagement by 17% and streamlining interview preparation',
        'Built feedback system using fine-tuned text classifiers to evaluate the user\'s response on the STAR method and cosine similarity for quetion-response relevance, improving STAR scores by 7.34%'
      ],
    },
    {
      company: 'Lavner Education',
      position: 'IT Intern',
      duration: 'June 2023 - August 2023',
      description: [
        'Guided a team of high schoolers through the development of 7+ full stack projects including websites, applications, and various games thus developing the students’ technical skills',
        'Designed and delivered comprehensive curriculum covering HTML, CSS, Python, C++, Java, and JavaScript, increasing project completion rates and improving code quality'
      ],
    },
  ];

  return (
    <ExperienceSection id="experience">
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Experience
      </Title>
      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExperienceIcon>
              <FaBriefcase />
            </ExperienceIcon>
            <CompanyName>{exp.company}</CompanyName>
            <Position>{exp.position}</Position>
            <Duration>{exp.duration}</Duration>
            <Description>
              {exp.description.map((point, idx) => (
                <BulletPoint key={idx}>{point}</BulletPoint>
              ))}
            </Description>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </ExperienceSection>
  );
};

export default Experience; 