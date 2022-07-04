import React, { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Pressable,
  Text,
  ActivityIndicator,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeContext } from '../context/themeContext';
import { UserList } from '../components/UserList';

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json(response.data))
    .then(responseJson => {
      return responseJson
    })
    .catch(error => {
      console.error(error);
    });
};

export const ListScreen = () => {
  const [usersData, setUsersData] = useState();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    console.log('theme changed', theme);
  }, [theme]);
  useEffect(() => {
    console.log("THE THEME IS", theme)
    getUsers().then(res =>
      setUsersData(res))
  }, []);

  if (usersData === undefined) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Pressable onPress={handleThemeChange}><Text>BUTTON</Text></Pressable>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <UserList props={usersData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
