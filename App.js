import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './src/context/themeContext';
import { NavContainer } from './src/Navigation/Navigation'
// import { ListScreen } from './src/screens/ListScreen';
// import { ProfileScreen } from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <ThemeProvider>
      <NavContainer />
    </ThemeProvider>
  );
};

export default App;
