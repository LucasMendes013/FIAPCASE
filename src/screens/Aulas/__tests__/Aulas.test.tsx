import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native'; 
import { lightTheme } from '../../../themes/index';  
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Aulas from '../../Aulas';
import configureStore from 'redux-mock-store';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn().mockResolvedValue('{"user": "test"}'),  
  setItem: jest.fn().mockResolvedValue(undefined),  
  removeItem: jest.fn().mockResolvedValue(undefined), 
}));

const mockStore = configureStore();

describe('Async Storage funcional ?', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { isLoggedIn: false, user: null, users: [] },
    });
    store.dispatch = jest.fn();
  });

  it('deve renderizar corretamente com tema', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <NavigationContainer>
            <Aulas />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    );

    expect(getByText('AGENDA')).toBeTruthy(); // Exemplo de asserção
  });
});
