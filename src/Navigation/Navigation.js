import React, { useState, useContext } from 'react';
import { Text, Pressable, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../context/themeContext';
import { ListScreen } from '../screens/ListScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export const NavContainer = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleSwitch = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setIsEnabled(previousState => !previousState)
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="List"
                screenOptions={{
                    headerRight: () => (
                        <Switch
                            trackColor={{ false: '#D3D3D3', true: "#899499" }}
                            thumbColor={theme === 'dark' ? "#CCCCFF" : "#ffffa7"}
                            ios_backgroundColor="#D3D3D3"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: theme === 'dark' ? '#121212' : '#FAF9F6',
                    },
                    headerTintColor: theme === 'dark' ? '#FAF9F6' : '#121212',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        title: 'Users',
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        headerTitle: '',
                        headerBackTitleVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
