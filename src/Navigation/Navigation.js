import React, { useContext } from 'react';
import { Text, Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../context/themeContext';
import { ListScreen } from '../screens/ListScreen'
import { ProfileScreen } from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export const NavContainer = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThemeChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="List" screenOptions={{
                headerStyle: {
                    backgroundColor: theme === 'dark' ? '#121212' : '#FAF9F6',
                },
                headerTintColor: theme === 'dark' ? '#FAF9F6' : '#121212',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen name="List" component={ListScreen} options={{
                    title: 'Users', headerRight: () => (
                        <Pressable onPress={handleThemeChange}><Text>Change Mode</Text>
                        </Pressable>
                    ),
                }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{
                    headerTitle: '',
                    headerBackTitleVisible: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

