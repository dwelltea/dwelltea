import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #faf8f3;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  position: relative;
  contain: layout style;
`;

export const Section = styled.section`
  background-color: #faf8f3;
  padding: 64px 0;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.1;
  color: #1a3d2e;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

export const RightContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

