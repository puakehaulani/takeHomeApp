import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/themeContext'

export const UserListItem = props => {
  const { user } = props;
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  const styles = {
    shadow: {
      shadowColor: theme === 'dark' ? '#FAF9F6' : '#121212',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    titleText: {
      color: theme === 'dark' ? '#FAF9F6' : '#121212',
      fontSize: 20,
      fontFamily: 'ArialRoundedMTBold',
    },
    subtitleText: {
      color: 'gray',
      fontSize: 14,
      fontFamily: 'ArialMT',
    },
    bodyText: {
      color: theme === 'dark' ? '#FAF9F6' : '#121212',
      fontSize: 12,
      fontFamily: 'ArialMT',
    },
    boldText: {
      color: theme === 'dark' ? '#FAF9F6' : '#121212',
      fontSize: 12,
      fontWeight: 'bold',
      fontFamily: 'ArialMT',
    },
  };

  return (
    <Pressable onPress={() => navigation.navigate('Profile', { user })}>
      <View
        style={[
          {
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 20,
            borderColor: theme === 'dark' ? '#121212' : '#FAF9F6',
            height: 70,
            margin: 10,
            alignItems: 'center',
            backgroundColor: theme === 'dark' ? '#121212' : '#FAF9F6',
          },
          styles.shadow,
        ]}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            source={{ uri: `https://i.pravatar.cc/150?img=${(user.id + 6)}` }}
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderColor: theme === 'dark' ? '#121212' : '#FAF9F6',
              borderRadius: 30,
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
          }}>
          <Text style={styles.titleText}>{user.name.replace(/\b(?:Mrs\.? *|Mr\. *|, Ms)\b/g, '')}</Text>
          <Text style={styles.subtitleText}>{user.email}</Text>
        </View>
      </View>
    </Pressable>
  );
};

