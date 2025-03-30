import React from 'react';
import { StatusBar } from 'react-native';
import * as Styled from './styles';
import SplashIcon from '../../assets/svg/SplashIcon';
import SignOutIcon from '../../assets/svg/icons/signOutIcon';

interface SignOutResponse {
  success: boolean;
  message?: string; 
}

interface NavBarProps {
  onProfileChange: () => void;
  onSignOut: () => Promise<SignOutResponse>;
  alunos: object[]; 
}

const NavBar = ({ onProfileChange, onSignOut, alunos = [] }: NavBarProps) => {
  const shouldShowProfileButton = alunos.length > 1;

  return (
    <Styled.Section>
      <StatusBar translucent backgroundColor="#000" barStyle="dark-content" />

      <Styled.IconWrapper>
        <SplashIcon width={100} height={100} />
      </Styled.IconWrapper>

      <Styled.ButtonWrapper>
        {shouldShowProfileButton && (
          <Styled.TransparentButton onPress={onProfileChange}>
            <Styled.ButtonText>TROCAR PERFIL</Styled.ButtonText>
          </Styled.TransparentButton>
        )}
        <Styled.TransparentButton onPress={onSignOut}>
          <Styled.ButtonText>SAIR</Styled.ButtonText>
          <Styled.IconContainer>
          <SignOutIcon />
          </Styled.IconContainer>
        </Styled.TransparentButton>
      </Styled.ButtonWrapper>
    </Styled.Section>
  );
};

export default NavBar;
