import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaGamepad, FaBook, FaMusic, FaCamera, FaPlane } from 'react-icons/fa';

const HobbiesSection = styled.section`
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

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const HobbyCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

const HobbyIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
`;

const HobbyName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
`;

const HobbyDescription = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
`;

const hobbies = [
  {
    name: 'Gaming',
    icon: <FaGamepad />,
    description: 'I enjoy playing video games in my free time, especially strategy and RPG games.',
  },
  {
    name: 'Reading',
    icon: <FaBook />,
    description: 'I love reading books about technology, science fiction, and personal development.',
  },
  {
    name: 'Music',
    icon: <FaMusic />,
    description: 'I play guitar and enjoy listening to various genres of music.',
  },
  {
    name: 'Photography',
    icon: <FaCamera />,
    description: 'I like capturing moments and exploring different photography techniques.',
  },
  {
    name: 'Travel',
    icon: <FaPlane />,
    description: 'I enjoy exploring new places and experiencing different cultures.',
  },
];

const Hobbies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HobbiesSection id="hobbies">
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Hobbies & Interests
      </Title>
      <HobbiesGrid>
        {hobbies.map((hobby, index) => (
          <HobbyCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <HobbyIcon>{hobby.icon}</HobbyIcon>
            <HobbyName>{hobby.name}</HobbyName>
            <HobbyDescription>{hobby.description}</HobbyDescription>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </HobbiesSection>
  );
};

export default Hobbies; 