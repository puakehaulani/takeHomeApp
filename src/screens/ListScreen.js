import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {UserList} from '../components/UserList';

export const ListScreen = () => {
  const [usersData, setUsersData] = useState();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        setUsersData(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUsers();
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
