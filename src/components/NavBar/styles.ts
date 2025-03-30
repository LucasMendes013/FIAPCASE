import styled from "styled-components/native";


export const Section = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 20px 20px;
`;

export const IconWrapper = styled.View`
  width: 40px;
  height: 40px;
  align-items: left;
  justify-content: center;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const TransparentButton = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View `
  margin: 0px 0px 0px 10px;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.s16};

`;