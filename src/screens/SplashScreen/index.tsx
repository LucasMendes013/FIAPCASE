import React, { useEffect, useRef } from 'react';
import { StatusBar, Animated } from 'react-native';
import * as Styled from './styles'; 
import SplashIcon from '../../assets/svg/SplashIcon';
import Lottie from '../../components/Animation';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 1500, 
      useNativeDriver: true, 
    }).start();
  }, []);

  return (
    <Styled.SplashContainer>
      <StatusBar translucent backgroundColor="#000" barStyle="dark-content" />
      <Styled.Content>
        <Animated.View style={{ opacity: fadeAnim }}>
          <SplashIcon />
        </Animated.View>
        <Lottie
          height={'180px'}
          width={'180px'}
          autoplay={true}
          loop={true}
          animation={'loadingSplash'}
        />
      </Styled.Content>
      <Styled.Footer>
        <Styled.SplashText color="#777777">DESENVOLVIDO POR LUCAS MENDES</Styled.SplashText>
      </Styled.Footer>
    </Styled.SplashContainer>
  );
};

export default SplashScreen;
