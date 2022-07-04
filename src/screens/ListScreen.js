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

// import { Colors } from 'react-native/Libraries/NewAppScreen';
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
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    getUsers().then(res =>
      setUsersData(res))
  }, []);

  const styles = {
    background: {
      backgroundColor: theme === 'dark' ? "#121212" : '#FAF9F6'
    }
  }

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  if (usersData === undefined) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={theme == 'dark' ? 'dark-content' : 'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}>
        <View
          style={styles.background}>
          <UserList props={usersData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
