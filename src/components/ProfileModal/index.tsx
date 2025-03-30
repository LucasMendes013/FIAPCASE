import React from 'react';
import { Modal } from 'react-native';
import * as Styled from './styles';


interface ProfileModalProps {
  isVisible: boolean;
  onClose: () => void;
  onProfileSelect: (profile: string) => void;
  alunos: Array<{
    primeiroNome: string;
    sobrenome: string;
    turma: string;
    rm: number;
    periodo: string;
  }>;
  profileWithBorder?: string;
}

const ProfileModal = ({
  isVisible,
  onClose,
  onProfileSelect,
  alunos,
  profileWithBorder
}: ProfileModalProps) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Styled.ModalContainer>
        <Styled.ModalContent>
          <Styled.CloseButton onPress={onClose}>
            <Styled.CloseButtonText>FECHAR</Styled.CloseButtonText>
          </Styled.CloseButton>

          <Styled.ModalTitle>Escolha o perfil que você quer visualizar</Styled.ModalTitle>

          {alunos.map((aluno, index) => (
            <Styled.ProfileButton
              key={index}
              onPress={() => onProfileSelect(index)} 
              hasBorder={index === profileWithBorder}
            >
              <Styled.ProfileButtonTopText>
                {`${aluno.primeiroNome} ${aluno.sobrenome}`}
              </Styled.ProfileButtonTopText>
              <Styled.ProfileButtonBottomText>
                {`${aluno.turma} - RM ${aluno.rm} - ${aluno.periodo}`}
              </Styled.ProfileButtonBottomText>
            </Styled.ProfileButton>
          ))}
        </Styled.ModalContent>
      </Styled.ModalContainer>
    </Modal>
  );
};

export default ProfileModal;
