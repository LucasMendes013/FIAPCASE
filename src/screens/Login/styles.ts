import styled from 'styled-components/native';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

export const KeyboardAvoidingWrapper = styled(KeyboardAvoidingView)`
  flex: 1;
  width: 100%;
`;

export const ScrollContainer = styled(ScrollView)`
  flex-grow: 1;
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;  
  height: 100%;
  flex-direction: column;
`;

export const Main = styled.View`
  align-items: center;
  margin-top: 30px;
`
export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const SplashText = styled.Text<{ color?: string }>`
  font-size: ${({ theme }) => theme.sizes.s24};
  position: absolute; 
  color: ${({ color, theme }) => color || theme.colors.background};
  text-align: center;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
`;


export const Footer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.anotherText};
  position: relative;
  top: 10%;
  width: 100%;
  height: 60px;  
  align-items: center;
  justify-content: center;  
`;


export const NegativeBar = styled.View`
  background-color: ${({ theme }) => theme.colors.button};
  position: relative;
  /* top: 25%; */
  width: 100%;
  height: 100px;  
`;


export const ContainerError = styled.View`
  height: 44px;
`

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.button};
  font-size: ${({ theme }) => theme.sizes.s16};
  margin-top: 5px;
  width: 230px;
  text-align: center;
`;