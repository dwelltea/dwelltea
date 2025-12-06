import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    max-width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SubmitButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #1a3d2e;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  
  &:hover:not(:disabled) {
    background-color: #152f24;
  }
  
  &:active:not(:disabled) {
    background-color: #0f1f18;
  }
  
  &:focus-visible {
    outline: 2px solid #1a3d2e;
    outline-offset: 2px;
  }
  
  &:disabled {
    background-color: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

