import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

export const UserListItem = props => {
  const { user } = props;
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Profile', { user })}>
      <View
        style={[
          {
            flex: 1,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 20,
            borderColor: 'white',
            height: 70,
            margin: 10,
            alignItems: 'center',
            backgroundColor: 'white',
          },
          styles.shadow,
        ]}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Image
            source={{ uri: `https://i.pravatar.cc/150?img=${user.id}` }}
            style={{
              width: 60,
              height: 60,
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 30,
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
          }}>
          <Text style={styles.titleText}>{user.name}</Text>
          <Text style={styles.subtitleText}>{user.email}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'ArialRoundedMTBold',
  },
  subtitleText: {
    color: 'gray',
    fontSize: 14,
    fontFamily: 'ArialMT',
  },
  bodyText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'ArialMT',
  },
  boldText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'ArialMT',
  },
});
