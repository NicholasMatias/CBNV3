import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectTech = styled.p`
  color: ${({ theme }) => theme.accent};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const projects = [
  {
    title: 'Panda Express Revived',
    description: 'Designed system with cashier, customer, and manager views. Implemented real-time translation, zoom, and image-based navigation for accessibility.',
    image: 'https://via.placeholder.com/800x400',
    github: 'https://github.com',
    live: 'https://example.com',
    tech: 'React, Express, Node.js, Vite, PostgreSQL',
  },
  {
    title: 'AI Economic Trend Predictor',
    description: 'Forecasted economic performance by country using stock indexes. Achieved 3.57% MAE on stock price forecasting.',
    image: 'https://via.placeholder.com/800x400',
    github: 'https://github.com',
    live: 'https://example.com',
    tech: 'TensorFlow, Keras, Python, Pandas, Matplotlib, NumPy',
  },
  {
    title: 'AI Resume Enhancer',
    description: 'Built tool that matches resumes to ideal job titles using tokenization, TF, IDF, and TF-IDF vectorization.',
    image: 'https://via.placeholder.com/800x400',
    github: 'https://github.com',
    live: 'https://example.com',
    tech: 'Python, Numpy, Pandas',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ProjectsSection id="projects">
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Projects
      </Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>{project.tech}</ProjectTech>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </ProjectLink>
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 