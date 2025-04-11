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
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 15px;
  border: 3px solid ${({ theme }) => theme.border};
`;

const ImageContainer = styled.div`
  position: relative;
  width: auto;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
  margin: 10px;

  &:hover {
    .overlay {
      opacity: 1;
    }
    
    .project-title {
      transform: translateY(0);
      opacity: 1;
    }

    .project-description {
      transform: translateY(0);
      opacity: 1;
    }

    ${ProjectImage} {
      transform: scale(1.05);
    }
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => 
    theme.mode === 'dark' 
      ? 'linear-gradient(180deg, rgba(255,215,0,0.85) 0%, rgba(184,134,11,0.95) 100%)'
      : 'linear-gradient(180deg, rgba(255,223,0,0.85) 0%, rgba(218,165,32,0.95) 100%)'
  };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
`;

const OverlayTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  transform: translateY(-20px);
  transition: all 0.3s ease;
  opacity: 0;
`;

const OverlayDescription = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transform: translateY(20px);
  transition: all 0.3s ease;
  opacity: 0;
`;

const OverlayButton = styled.a`
  background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(0,0,0,0.8)' : 'white'};
  color: ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.mode === 'dark' ? '#FFD700' : '#DAA520'};

  &:hover {
    background: ${({ theme }) => theme.mode === 'dark' ? 'rgba(0,0,0,0.9)' : 'rgba(255,255,255,0.9)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    
  }
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
    summary: 'An AI-powered behavioral interview simulator with real-time speech processing and intelligent feedback.',
    description: [
      'Developed a web app simulating behavioral interviews using Whisper3 (speech-to-text), Llama3 (LLM), and Deepgram\'s text-to-speech API.',
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
    summary: 'A modern point-of-sale system with multi-language support and role-based interfaces.',
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
    summary: 'An interactive appreciation platform featuring Giphy integration and social engagement features.',
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
    summary: 'A dynamic movie discovery platform with advanced search and filtering capabilities.',
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
    summary: 'An interactive music platform for creating and managing personalized playlists with social features.',
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
    summary: 'A machine learning solution for forecasting economic trends with high accuracy.',
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
    summary: 'An AI tool that optimizes resume-job matching using advanced text processing.',
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
    summary: 'A classic arcade game recreation with modern gameplay mechanics.',
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
            <ImageContainer>
              <ProjectImage src={project.image} alt={project.title} />
              <ImageOverlay className="overlay">
                <OverlayTitle className="project-title">{project.title}</OverlayTitle>
                <OverlayDescription className="project-description">
                  {project.summary}
                </OverlayDescription>
                <OverlayButton href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                  View Project
                </OverlayButton>
              </ImageOverlay>
            </ImageContainer>
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