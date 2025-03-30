import React, { useState } from 'react';
import * as Styled from './styles';
import DownDropdownIcon from '../../assets/svg/icons/DownDropdownIcon';
import UpDropdownIcon from '../../assets/svg/icons/UpDropdownIcon';
import { FlatList } from 'react-native';

interface DropdownMenuProps {
    options: { nome: string }[];
    dropdownOpen: boolean;
    selectedOption: string | null;
    toggleDropdown: () => void;
    handleOptionSelect: (option: string) => void;
    alunos: {
        boletim: { turma: string, ano: string, trimestres: { trimestre: string, disciplinas: { nome: string, nota: string, faltas: string }[] }[] }[];
        agenda: { dia: string, aulas: { horario: string, disciplina: string }[] }[]
    };
}

const DropdownBulletin = ({
    dropdownOpen,
    toggleDropdown,
    handleOptionSelect,
    alunos,
}: DropdownMenuProps) => {
    const [activeBoletimIndex, setActiveBoletimIndex] = useState(0);
    const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});
    const [openIcons, setOpenIcons] = useState<{ [key: string]: boolean }>({});
    const [dropdownStates, setDropdownStates] = useState({
        0: false,
        1: false,
        2: false,
    });

    const boletim = alunos.boletim[activeBoletimIndex].trimestres;

    const mapDisciplinas = (disciplinas) => {
        return disciplinas.map((disciplina) => ({
            name: disciplina?.nome,
            grade: disciplina?.nota,
            absences: disciplina?.faltas,
        }));
    };

    const handleSelectOption = (index: number) => {
        setActiveBoletimIndex(index);
        handleOptionSelect(alunos.boletim[index].ano);
    };

    const toggleSubject = (subject: string) => {
        setOpenSubjects((prev) => ({
            ...prev,
            [subject]: !prev[subject],
        }));

        setOpenIcons((prev) => ({
            ...prev,
            [subject]: !prev[subject],
        }));
    };

    const toggleDropdownTrimestre = (index: number) => {
        setDropdownStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const data = [
        {
            trimestre: boletim[0].trimestre,
            subjects: mapDisciplinas(boletim[0].disciplinas),
        },
        {
            trimestre: boletim[1].trimestre,
            subjects: mapDisciplinas(boletim[1].disciplinas),
        },
        {
            trimestre: boletim[2].trimestre,
            subjects: mapDisciplinas(boletim[2].disciplinas),
        },
    ];

    const renderItem = ({ item, index }) => (
        <Styled.AccordionContainer>
            <Styled.ToggleButton onPress={() => toggleDropdownTrimestre(index)}>
                <Styled.AccordionTitle>{item.trimestre} TRIMESTRE</Styled.AccordionTitle>
                {dropdownStates[index] ? <UpDropdownIcon /> : <DownDropdownIcon />}
            </Styled.ToggleButton>

            {dropdownStates[index] && (
                <Styled.SubjectList>
                    {item.subjects.map((subject) => (
                        <Styled.SubjectContainer key={subject.name}>
                            <Styled.SubjectButton onPress={() => toggleSubject(subject.name)}>
                                <Styled.SubjectTitle>{subject.name}</Styled.SubjectTitle>
                                {openIcons[subject.name] ? <UpDropdownIcon /> : <DownDropdownIcon />}
                            </Styled.SubjectButton>
                            {openSubjects[subject.name] && (
                                <Styled.SubjectDetails>
                                    <Styled.SubjectText>Nota: {subject.grade ?? '0'}</Styled.SubjectText>
                                    <Styled.SubjectText>Faltas: {subject.absences ?? '0'}</Styled.SubjectText>
                                </Styled.SubjectDetails>
                            )}
                        </Styled.SubjectContainer>
                    ))}
                </Styled.SubjectList>
            )}
        </Styled.AccordionContainer>
    );

    return (
        <>
            <Styled.Button onPress={toggleDropdown}>
                <Styled.ButtonText>
                    {alunos.boletim[activeBoletimIndex]?.turma} - {alunos.boletim[activeBoletimIndex]?.ano}
                </Styled.ButtonText>
                <Styled.IconContainer>
                    {dropdownOpen ? <UpDropdownIcon /> : <DownDropdownIcon />}
                </Styled.IconContainer>
            </Styled.Button>

            {dropdownOpen && (
                <Styled.Dropdown>
                    {alunos.boletim.map((item, index) => (
                        <Styled.DropdownOption key={index} onPress={() => handleSelectOption(index)}>
                            <Styled.DropdownText>
                                {`${item.turma} - ${item.ano}`}
                            </Styled.DropdownText>
                        </Styled.DropdownOption>
                    ))}
                </Styled.Dropdown>
            )}

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={{marginBottom: 40}}
            />
        </>
    );
};

export default DropdownBulletin;
