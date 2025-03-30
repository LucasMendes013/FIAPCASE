import React from 'react';
import * as Styled from './styles';

interface InputProps {
  type: 'cpf' | 'password';
  value: string;
  onChangeText: (text: string) => void;
}

const Input = ({ type, value, onChangeText }: InputProps) => {
  const handleChange = (text: string) => {
    if (type === 'cpf') {
      const cleaned = text.replace(/\D/g, '');

      if (cleaned.length > 11) return;

      const formatted = cleaned
        .replace(/^(\d{3})(\d{1,3})/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d{1,3})/, '$1.$2.$3')
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, '$1.$2.$3-$4');

      onChangeText(formatted);
    } else {
      onChangeText(text);
    }
  };

  return (
    <Styled.Container>
      <Styled.Label>{type === 'cpf' ? 'CPF' : 'SENHA'}</Styled.Label>
      <Styled.Input
        value={value}
        onChangeText={handleChange}
        keyboardType={type === 'cpf' ? 'numeric' : 'default'}
        secureTextEntry={type === 'password'}
        maxLength={type === 'cpf' ? 14 : undefined}
        selectionColor="white"
      />
    </Styled.Container>
  );
};

export default Input;
