import { motion } from 'framer-motion';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: ${({ theme }) => theme.background};
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${({ theme }) => theme.accent};
  opacity: 0.1;
`;

const AnimatedBackground = () => {
  const shapes = [
    { size: 300, x: '10%', y: '20%' },
    { size: 200, x: '80%', y: '40%' },
    { size: 150, x: '30%', y: '70%' },
    { size: 250, x: '70%', y: '20%' },
  ];

  return (
    <BackgroundContainer>
      {shapes.map((shape, index) => (
        <Shape
          key={index}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground; 