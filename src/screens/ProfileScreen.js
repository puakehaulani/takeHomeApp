import React, { useContext, useEffect } from 'react';
import { ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { ThemeContext } from '../context/themeContext'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { UserProfile } from '../components/UserProfile';

export const ProfileScreen = ({ route }) => {
  const { theme } = useContext(ThemeContext);
  const user = route.params.user;
  const styles = {
    background: {
      backgroundColor: theme === 'dark' ? "#121212" : '#FAF9F6'
    }
  }

  return (
    <>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
      <View
        contentInsetAdjustmentBehavior="automatic"
        style={styles.background}>
        <View
          style={styles.background}>
          <UserProfile props={user} />
        </View>
      </View>
    </>
  );
};
