import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
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

  useEffect(() => {
    getUsers().then(res =>
      setUsersData(res))
  }, []);

  if (usersData === undefined) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
