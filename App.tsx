import React, { useState, useEffect, useRef } from 'react';
import { Animated, StyleSheet, StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from './src/themes';
import AppNavigation from './src/navigation/AppNavigation';
import SplashScreen from './src/screens/SplashScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme(); 
  const [isLoading, setIsLoading] = useState(true);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setIsLoading(false);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
        <StatusBar translucent backgroundColor="transparent" />

        <AppNavigation />

        {isLoading && (
          <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
            <SplashScreen />
          </Animated.View>
        )}
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});

export default App;
