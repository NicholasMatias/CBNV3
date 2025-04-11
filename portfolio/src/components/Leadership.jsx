import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';

const LeadershipSection = styled.section`
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

const LeadershipContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const OrganizationCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
  width: 100%;
`;

const OrganizationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const OrganizationName = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary};
`;

const Role = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const AchievementItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
`;

const AchievementIcon = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-top: 0.2rem;
`;

const AchievementText = styled.div`
  flex: 1;
`;

const AchievementTitle = styled.h5`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const AchievementDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <FaUsers />,
      title: 'Chapter Growth',
      description: 'Founded and grew the TAMU chapter from 0 to 50+ members in the first semester.',
    },
    {
      icon: <FaHandshake />,
      title: 'Industry Partnerships',
      description: 'Established partnerships with leading tech companies for networking and career opportunities.',
    },
    {
      icon: <FaChartLine />,
      title: 'Professional Development',
      description: 'Organized workshops and events focused on technical skills and career advancement.',
    },
  ];

  return (
    <LeadershipSection id="leadership">
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Leadership
      </Title>
      <LeadershipContent>
        <OrganizationCard
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <OrganizationHeader>
            <OrganizationName>TAMU ColorStack</OrganizationName>
          </OrganizationHeader>
          <Role>Chapter Founder & President</Role>
          <Description>
            As the founder and president of the TAMU ColorStack chapter, I lead initiatives to support and empower 
            underrepresented students in technology. Our chapter provides resources, mentorship, and networking 
            opportunities to help members succeed in their academic and professional journeys.
          </Description>
          <AchievementsList>
            {achievements.map((achievement, index) => (
              <AchievementItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AchievementIcon>{achievement.icon}</AchievementIcon>
                <AchievementText>
                  <AchievementTitle>{achievement.title}</AchievementTitle>
                  <AchievementDescription>{achievement.description}</AchievementDescription>
                </AchievementText>
              </AchievementItem>
            ))}
          </AchievementsList>
        </OrganizationCard>
      </LeadershipContent>
    </LeadershipSection>
  );
};

export default Leadership; 