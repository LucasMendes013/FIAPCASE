import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
 flex-direction: row; 
 align-items: center; 
 justify-content: space-between; 
 padding: 10px 15px; 
 background-color: ${({ theme }) => theme.colors.accordion}; 
 border-radius: 8px; width: 90%; 
`;


export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.s16};
`;

export const IconContainer = styled.View`
  margin-left: 10px;
  
`;

export const Dropdown = styled.View`
  background-color: ${({ theme }) => theme.colors.accordion};
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px 0;
  width: 350px;
`;

export const DropdownOption = styled.TouchableOpacity`
  padding: 10px;
`;

export const DropdownText = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s16};
  color: ${({ theme }) => theme.colors.text};
  margin: 0px 5px;
`;

export const SelectedOptionItem = styled.View`
  margin-right: 10px;
  padding: 10px 0px 0px 0px;
`;

export const DotContainer = styled.View`
  align-items: center;
  flex-direction: row;
`

export const SelectedOptionLabel = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s12}; 
  color: ${({ theme }) => theme.colors.text}; 
  margin: 2px 0px 0px 5px;
`;

export const SelectedOptionText = styled.Text`
  font-size: ${({ theme }) => theme.sizes.s16}; 
  color: ${({ theme }) => theme.colors.text}; 
  font-weight: bold;
  margin: 5px 0px 0px 10px;
`;

export const FlatListContainer = styled.View`
  margin-top: 10px;
  padding: 5px 10px;
  width: 90%;
  flex-direction: row;
  overflow: hidden;
  border-radius: 5px;
`;

export const WrapperImage = styled.View`
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text`
  margin: 30px 0px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.s20};
`


export const AccordionContainer = styled.View`
  margin-top: 10px;
  border-radius: 5px; 

`;

export const ToggleButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 15px;
  border-radius: 10px;

  width: 95%;
  background-color: ${({ theme }) => theme.colors.nested};
  position: relative;
  left: 9px;
`;

export const AccordionTitle = styled.Text`
    font-size:  ${({ theme }) => theme.sizes.s16};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.button};
  
`;

export const SubjectList = styled.View`
  margin-top: 10px;
  width: 95%;
  position: relative;
  left: 7px;
  
`;

export const SubjectContainer = styled.View`
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  
`;

export const SubjectButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;

`;

export const SubjectTitle = styled.Text`
    font-size:  ${({ theme }) => theme.sizes.s12};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
`;

export const SubjectDetails = styled.View`
  margin-top: 5px;

`;

export const SubjectText = styled.Text`
    font-size:  ${({ theme }) => theme.sizes.s12};
  color: ${({ theme }) => theme.colors.text};
  padding: 2px 10px;
`;
