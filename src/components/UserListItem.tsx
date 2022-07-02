import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export const UserListItem = props => {
  const {user} = props;
  console.log('item', user);
  return (
    <Pressable onPress={() => console.log(user.name)}>
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
            //    backgroundColor: 'yellow'
          }}>
          <View
            style={[
              {
                width: 60,
                height: 60,
                borderWidth: 1,
                borderColor: 'pink',
                borderRadius: 30,
                backgroundColor: 'lavender',
              },
              styles.shadow,
            ]}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            //   backgroundColor: 'pink',
          }}>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
});
