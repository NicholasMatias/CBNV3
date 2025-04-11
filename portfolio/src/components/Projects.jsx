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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.border};
  width: 500px;
  display: flex;
  flex-direction: column;
  height: 720px;
`;

const ProjectImage = styled.img`
  width: auto;
  height: auto;
  margin: 25px;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.border};
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const Description = styled.ul`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  line-height: 1.6;
  padding-left: 1.5rem;
  flex-grow: 1;
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

const ProjectTech = styled.p`
  color: ${({ theme }) => theme.accent};
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
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
    title: 'InterviewMe',
    description: [
      'Developed a web app simulating behavioral interviews using Whisper3 (speech-to-text), Llama3 (LLM), and Deepgram’s text-to-speech API.',
      'Implemented features like question up-voting, company tag management, and search/sort, boosting user engagement by 17%.',
      'Built a feedback system using fine-tuned text classifiers and cosine similarity to evaluate STAR method responses, improving scores by 7.34%.'
    ],
    image: 'project_interview_me.png',
    github: 'https://github.com/NicholasMatias/InterviewMe',
    live: '',
    tech: 'React, Express, Node, Vite, Firebase Auth, and Firebase Firestore',  
  },
  {
    title: 'Panda Express Revived',
    description: [
      'Designed and implemented a comprehensive ordering system with separate interfaces for cashiers, customers, and managers',
      'Integrated real-time translation features to support multiple languages and improve accessibility',
      'Developed image-based navigation system with zoom capabilities for enhanced user experience',
      'Created a robust backend system to handle order processing and inventory management'
    ],
    image: 'project_panda_express.png',
    github: 'https://github.com/CSCE331-Fall2024/331-Project3-1B',
    live: '',
    tech: 'React, Express, Node.js, Vite, and PostgreSQL',
  },
  {
    title: 'Kudos Board',
    description: [
      "Built a card app with features to create, filter, and upvote cards, integrating Giphy API for animated images.",
      "Implemented user authentication, board management, and deletion functionality, associating boards with users.",
      "Developed API calls for board and card management"
    ],
    image: 'project_kudosboard.png', 
    github: 'https://github.com/NicholasMatias/KudosBoard',
    live: '',
    tech: 'React, Express, Node.js, Vite, and PostgreSQL',
  },
  {
    title: 'Flixster', 
    description: [
      "Built a movie display app with The Movie Database API, showing movie titles, posters, votes, movie trailers, and detailed information in a popup.",
      "Implemented search, filter, and sorting features for movie results, allowing users to interact with and sort by name, release date, or rating.",
      "Developed responsive design with accessibility features like semantic HTML, color contrast, alt text, and font sizing for enhanced user experience."
    ],
    image: 'project_flixster.png',  
    github: 'https://github.com/NicholasMatias/Flixster', 
    live: 'https://flixster-335t.onrender.com/',
    tech: 'React, Express, Node.js, and PostgreSQL',
  },
  {
    title: 'Music Playlist Explorer', 
    description: [
      "Developed an interactive music playlist explorer with dynamic playlist rendering, like functionality, and song shuffling.",
      "Built a playlist management system allowing users to add, edit, delete, and sort playlists by name or creator.",
      "Optimized user experience with responsive UI and real-time updates for playlist likes and song shuffle."
    ],
    image: 'project_music_playlist_explorer.png',
    github: 'https://github.com/NicholasMatias/Music-Playlist-Explorer',  
    live: '',
    tech: 'React, Express, Node.js, and PostgreSQL',
  },
  {
    title: 'AI Economic Trend Predictor',
    description: [
      'Developed machine learning model to forecast economic sector performance across different countries',
      'Achieved 3.57% Mean Absolute Error (MAE) in stock price predictions',
      'Implemented data preprocessing pipeline for handling diverse economic indicators',
      'Created visualization tools for analyzing and presenting economic trends'
    ],
    image: 'project_stock_prediction.png',
    github: 'https://github.com/NicholasMatias/RNN_LSTM_Route_For_Stock_Prediction',
    live: '',
    tech: 'TensorFlow, Keras, Python, Pandas, Matplotlib, and NumPy',
  },
  {
    title: 'AI Resume Enhancer',
    description: [
      'Built an AI-powered tool that analyzes and matches resumes to ideal job titles',
      'Implemented advanced text processing using tokenization and TF-IDF multiplication',
      'Developed scoring system to evaluate resume-job title compatibility',
      'Created user-friendly interface for resume upload and analysis'
    ],
    image: 'project_AI_resume.png',
    github: 'https://docs.google.com/presentation/d/1pSjG08edGk55vBeSsvZDXTT0H4TP0_rS/edit',
    live: '',
    tech: 'Python, Numpy, and Pandas',
  },
  {
    title: 'Pong Game',
    description: [
      'Developed a Pong game using Python and Pygame',
      'Implemented player movement, ball physics, and scoring system',
      'Created a user-friendly interface for game play'
    ],
    image: 'project_pong_game.png',
    github: 'https://github.com/NicholasMatias/PongGameNRM',
    live: '',
    tech: 'Python and Pygame',
  }
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
              <Description>
                {project.description.map((point, idx) => (
                  <BulletPoint key={idx}>{point}</BulletPoint>
                ))}
              </Description>
              <ProjectTech>{project.tech}</ProjectTech>
              <ProjectLinks>
                {project.github && (
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                )}
                {project.live && (
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 