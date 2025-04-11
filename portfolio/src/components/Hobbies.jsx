import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { 
  FaBasketballBall, FaFutbol, FaFootballBall, FaDumbbell, 
  FaRunning, FaChess, FaFilm
} from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';

const HobbiesSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const HobbyCard = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.card};
  border-radius: 15px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => 
      theme.mode === 'dark' 
        ? 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(218,165,32,0.1))'
        : 'linear-gradient(45deg, rgba(255,215,0,0.05), rgba(218,165,32,0.05))'
    };
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }

    ${({ theme }) => theme.mode === 'dark' && `
      box-shadow: 0 10px 20px rgba(255, 215, 0, 0.1);
    `}
  }
`;

const HobbyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};
  transition: transform 0.3s ease;

  ${HobbyCard}:hover & {
    transform: scale(1.1);
  }
`;

const HobbyName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.text};
  transition: transform 0.3s ease;

  ${HobbyCard}:hover & {
    transform: scale(1.05);
  }
`;

const Hobbies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const hobbies = [
    { name: 'Basketball', icon: <FaBasketballBall /> },
    { name: 'Soccer', icon: <FaFutbol /> },
    { name: 'Football', icon: <FaFootballBall /> },
    { name: 'Weightlifting', icon: <FaDumbbell /> },
    { name: 'Running', icon: <FaRunning /> },
    { name: 'Calisthenics', icon: <GiMuscleUp /> },
    { name: 'Chess', icon: <FaChess /> },
    { name: 'Movies & Shows', icon: <FaFilm /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <HobbiesSection id="hobbies" ref={ref}>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Hobbies
      </Title>
      <HobbiesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {hobbies.map((hobby, index) => (
          <HobbyCard
            key={hobby.name}
            variants={itemVariants}
          >
            <HobbyIcon>{hobby.icon}</HobbyIcon>
            <HobbyName>{hobby.name}</HobbyName>
          </HobbyCard>
        ))}
      </HobbiesGrid>
    </HobbiesSection>
  );
};

export default Hobbies; 