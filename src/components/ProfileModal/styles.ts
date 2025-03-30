import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  flex-direction: row;
  align-items: center;
  margin: 40px 10px 0px 0px;
`;

export const CloseButtonText = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s16};
  color: ${({ theme }) => theme.colors.button};
  font-weight: bold;
  margin: 0px 10px;
`;

export const ModalTitle = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s24};
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProfileButton = styled.TouchableOpacity<{ hasBorder?: boolean }>`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.nested};
  margin-top: 10px;
  border-radius: 10px;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  align-items: right;
  border: ${({ hasBorder, theme }) => (hasBorder ? `1px solid ${theme.colors.button}` : 'none')};  
`;



export const ProfileButtonTopText = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.sizes.s16};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5px; 
`;

export const ProfileButtonBottomText = styled.Text`
 color: ${({ theme }) => theme.colors.text};
 font-size: ${({ theme }) => theme.sizes.s16};
  text-align: center;
  margin-top: 5px; 
`;
