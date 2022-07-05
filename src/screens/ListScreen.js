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
  Dimensions,

} from 'react-native';
import { useNetInfo } from "@react-native-community/netinfo";
import BlinkView from 'react-native-blink-view'
import { ThemeContext } from '../context/themeContext';
import { UserList } from '../components/UserList';
import { useGetUsers } from '../hooks/useGetUsers';

// export const getUsers = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json(response.data))
//     .then(responseJson => {
//       return responseJson
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };

export const ListScreen = () => {
  const [usersData, setUsersData] = useState();
  const { theme, setTheme } = useContext(ThemeContext);
  const netInfo = useNetInfo();
  const width = Dimensions.get('window').width;
  useEffect(() => {
    useGetUsers().then(res =>
      setUsersData(res))
  }, []);

  const styles = {
    background: {
      backgroundColor: theme === 'dark' ? "#121212" : '#FAF9F6'
    }
  }

  if (!netInfo.isConnected || !netInfo.isInternetReachable) {
    return (
      <SafeAreaView style={styles.background}>
        <StatusBar barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.background}>
          <BlinkView delay={2000} element={View} style={{ width: '100%', height: 40, backgroundColor: '#D3D3D3' }}></BlinkView>
          <Text style={{ textAlign: 'center', position: 'absolute', left: 80, top: 10 }}>You're offline. Check your connection.</Text>

        </ScrollView>
      </SafeAreaView>
    )
  }

  if (usersData === undefined) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle={theme == 'dark' ? 'light-content' : 'dark-content'} />


      {!netInfo.isConnected || !netInfo.isInternetReachable ?
        <View style={{ height: '100%' }}>
          <BlinkView delay={2000} element={View} style={{ width: '100%', height: 40, backgroundColor: '#D3D3D3' }} />
          <Text style={{ textAlign: 'center', position: 'absolute', left: 80, top: 10 }}>
            You're offline. Check your connection.
          </Text>
        </View>
        :

        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <UserList props={usersData} />
        </ScrollView>
      }

    </SafeAreaView >
  );
};
