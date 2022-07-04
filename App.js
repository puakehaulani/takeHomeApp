import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider, ThemeContext } from './src/context/themeContext';
import { ListScreen } from './src/screens/ListScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={ListScreen} options={{ title: 'Users' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
