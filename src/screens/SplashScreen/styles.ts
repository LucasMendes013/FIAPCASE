import styled from 'styled-components/native';

export const SplashContainer = styled.View`
  flex: 1;  
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 90px; 
  width: 80%;
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.button};
  align-items: center;
  justify-content: center;
`;

export const SplashText = styled.Text<{ color?: string }>`
  font-size: ${({ theme }) => theme.sizes.s20};
  color: ${({ color, theme }) => color || theme.colors.background};
  text-align: center;
  width: 200px;
`;
