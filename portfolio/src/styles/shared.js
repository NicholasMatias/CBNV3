import styled from 'styled-components';

export const SectionContainer = styled.section`
  min-height: 100vh;
  padding-top: 120px;
  scroll-margin-top: 80px;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding-top: 100px;
    scroll-margin-top: 60px;
  }

  @media (max-width: 480px) {
    padding-top: 80px;
    scroll-margin-top: 40px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`; 