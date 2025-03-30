import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import * as Styled from './styles';
import NavBar from '../../components/NavBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import ProfileModal from '../../components/ProfileModal';
import { useNavigation } from '@react-navigation/native';
import DropdownBulletin from '../../components/AccordionBulletin';
import { login, logout } from '../../redux/store';

const Bulletin = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isLoggedIn, user, users } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(user);
  const [selectedProfile, setSelectedProfile] = useState<number>(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuthentication = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      const storedUser = await AsyncStorage.getItem('user');
      const storedUsers = await AsyncStorage.getItem('users');

      if (isLoggedIn === 'true' && storedUser && storedUsers) {
        const user = JSON.parse(storedUser);
        const users = JSON.parse(storedUsers);

        dispatch(login({ user, users }));
        setUserData(user);
      } else {
        dispatch(logout());
      }
    };

    checkAuthentication();
  }, [dispatch]);

  console.log('dados aq', isLoggedIn, user, users);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const handleProfileChange = () => {
    setIsModalVisible(true);
  };

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile);
    setDropdownOpen(false);
    setIsModalVisible(false)

  };

  const handleSignOut = async (): Promise<SignOutResponse> => {
    try {
      await dispatch(logout());
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('users');
      navigation.replace('Login');

      return { success: true };
    } catch (error) {
      console.error('Erro ao fazer logout', error);
      return { success: false, message: 'Erro ao sair. Tente novamente.' };
    }
  };

  return (
    <Styled.Container>
      <StatusBar translucent backgroundColor="#000" barStyle="dark-content" />

      <NavBar
        onProfileChange={handleProfileChange}
        onSignOut={handleSignOut}
        alunos={user?.alunos || []}
      />

      <Styled.GreetingContainer>
        <Styled.GreetingText>
          Olá, <Styled.GreetingBoldText>{userData?.primeiroNome || 'Bem-Vindo'}</Styled.GreetingBoldText>
        </Styled.GreetingText>
      </Styled.GreetingContainer>

      <Styled.GreetingContainer>
        <Styled.StudentText isUpperCase={true}>
          {userData?.alunos?.[selectedProfile]?.primeiroNome}
        </Styled.StudentText>
        <Styled.StudentText>
          {userData?.alunos?.[selectedProfile]?.turma} - RM {userData?.alunos?.[selectedProfile]?.rm} - {userData?.alunos?.[selectedProfile]?.periodo}
        </Styled.StudentText>
      </Styled.GreetingContainer>

      <Styled.Main>
        <Styled.Title>BOLETIM</Styled.Title>

        <DropdownBulletin
          options={userData?.alunos?.[selectedProfile]?.boletim
            ? userData.alunos[selectedProfile].boletim.map((item) => ({
              nome: `${item.turma}`
            }))
            : []}
          dropdownOpen={dropdownOpen}
          selectedOption={selectedOption}
          toggleDropdown={toggleDropdown}
          handleOptionSelect={handleOptionSelect}
          alunos={userData?.alunos[selectedProfile]}
        />

      </Styled.Main>

      <ProfileModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onProfileSelect={handleProfileSelect}
        alunos={userData?.alunos}
        profileWithBorder={selectedProfile}
      />

    </Styled.Container>
  );
};

export default Bulletin;
