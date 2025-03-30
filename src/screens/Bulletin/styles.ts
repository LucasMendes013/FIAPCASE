import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface StudentTextProps {
  isUpperCase?: boolean;
}

export const Container = styled.View`
  justify-content: top;
  padding: 10px 0px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Section = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

`;

export const IconWrapper = styled.View`
  width: 40px;
  height: 40px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const TransparentButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: transparent;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.s16};

`;

export const GreetingContainer = styled.View`
  width: 100%;
  padding: 20px 0px 10px 0px;
  align-items: center;
  justify-content: center;
`;

export const GreetingText = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s24};
  color: ${({ theme }) => theme.colors.text};
`;

export const StudentText = styled.Text<StudentTextProps>`
  font-size: ${({ theme }) => theme.sizes.s16};
  margin: 5px 0px;
  color: ${({ theme }) => theme.colors.text};
  text-transform: ${({ isUpperCase }) => (isUpperCase ? 'uppercase' : 'none')};
`;

export const GreetingBoldText = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s24};
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text};
`;

export const Main = styled.View`
  align-items: center;
  margin: 30px 0px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s24};
  color: ${({ theme }) => theme.colors.button};
  font-weight: bold;
  margin: 0px 0px 30px 0px;
`


export const FlatListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
})`
  width: 100%;
`;





