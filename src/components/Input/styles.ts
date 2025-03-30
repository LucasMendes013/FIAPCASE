import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.s20};
  margin: 30px 0px 20px 0px;
`

export const Input = styled.TextInput.attrs(({ theme }) => ({
    selectionColor: theme.colors.text, 
  }))`
    height: 60px; 
    width: 318px;
    font-size: ${({ theme }) => theme.sizes.s32}; 
    padding: 0 8px; 
    border-width: 0;  
    border-bottom-width: 1px; 
    border-bottom-color: ${({ theme }) => theme.colors.line};  
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 12px; 
    text-align: center;
  `;