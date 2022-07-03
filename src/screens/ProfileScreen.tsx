import React from 'react';
import {ScrollView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {UserProfile} from '../components/UserProfile';

export const ProfileScreen = ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const user = route.params.user;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.offWhite,
          }}>
          <UserProfile props={user} />
        </View>
      </ScrollView>
    </>
  );
};
