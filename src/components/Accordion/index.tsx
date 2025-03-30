import React from 'react';
import * as Styled from './styles';
import DownDropdownIcon from '../../assets/svg/icons/DownDropdownIcon';
import UpDropdownIcon from '../../assets/svg/icons/UpDropdownIcon';
import { FlatList } from 'react-native';
import DotIcon from '../../assets/svg/icons/dotIcon';
import BackgroundImage from '../../assets/svg/BackgroundImage';

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    const daysOfWeek = [
        'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
        'quinta-feira', 'sexta-feira', 'sábado'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${day} de ${month}, ${dayOfWeek}`;
};

interface DropdownMenuProps {
    options: { nome: string }[];
    dropdownOpen: boolean;
    selectedOption: string | null;
    toggleDropdown: () => void;
    handleOptionSelect: (option: string) => void;
    alunos: {
        agenda: { dia: string, aulas: { horario: string, disciplina: string }[] }[]
    };
}

const DropdownMenu = ({
    options,
    dropdownOpen,
    selectedOption,
    toggleDropdown,
    handleOptionSelect,
    alunos,
}: DropdownMenuProps) => {

    const aluno = alunos;
    const agenda = aluno?.agenda;
    const getAulasParaData = (data: string) => {
        console.log("Função chamada com a data:", data);

        if (!agenda) {
            return [];
        }
        const dataFormatada = new Date(data).toISOString().split('T')[0]; 
        console.log("Data formatada:", dataFormatada);

        const agendaParaData = agenda.find(agenda => agenda.dia === dataFormatada);
        console.log("Agenda para data encontrada:", agendaParaData);

        return agendaParaData ? agendaParaData.aulas : [];
    };

    const displayText = selectedOption
        ? formatDate(selectedOption)
        : options.length > 0
            ? formatDate(options[0].nome)
            : "Mostrar Opções";


    const aulasParaData = selectedOption ? getAulasParaData(selectedOption) : [];

    const handleSelectOption = (option: string) => {
        handleOptionSelect(option);
    };

    return (
        <>
            <Styled.Button onPress={toggleDropdown}>
                <Styled.ButtonText>
                    {displayText}
                </Styled.ButtonText>
                <Styled.IconContainer>
                    {dropdownOpen ? <UpDropdownIcon /> : <DownDropdownIcon />}
                </Styled.IconContainer>
            </Styled.Button>

            {dropdownOpen && (
                <Styled.Dropdown>
                    {options.map((option, index) => (
                        <Styled.DropdownOption key={index} onPress={() => handleSelectOption(option.nome)}>
                            <Styled.DropdownText>{formatDate(option.nome)}</Styled.DropdownText>
                        </Styled.DropdownOption>
                    ))}
                </Styled.Dropdown>
            )}

            {selectedOption && !dropdownOpen && aulasParaData.length > 0 && (
                <Styled.FlatListContainer>
                    <FlatList
                        data={aulasParaData}
                        renderItem={({ item }) => (
                            <Styled.SelectedOptionItem>
                                <Styled.DotContainer>
                                    <DotIcon />
                                    <Styled.SelectedOptionLabel>
                                        {item.horario}
                                    </Styled.SelectedOptionLabel>
                                </Styled.DotContainer>

                                <Styled.SelectedOptionText>{item.disciplina}</Styled.SelectedOptionText>
                            </Styled.SelectedOptionItem>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </Styled.FlatListContainer>
            )}

            {selectedOption && !dropdownOpen && aulasParaData.length === 0 && (
                <Styled.FlatListContainer>
                    <Styled.SelectedOptionItem>
                        <Styled.WrapperImage>
                            <BackgroundImage />
                            <Styled.Label>Sem aulas neste dia</Styled.Label>
                        </Styled.WrapperImage>
                    </Styled.SelectedOptionItem>
                </Styled.FlatListContainer>
            )}
        </>
    );
};

export default DropdownMenu;
