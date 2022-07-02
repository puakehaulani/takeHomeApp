import React from 'react';
import {View, Text, Pressable, Image, StyleSheet} from 'react-native';

export const UserProfile = () => {
  return (
    <View
      style={[
        {
          borderWidth: 1,
          borderRadius: 20,
          borderColor: 'white',
          margin: 10,
          alignItems: 'center',
          backgroundColor: 'lightgray',
        },
        styles.shadow,
      ]}>
      <View style={{backgroundColor: 'pink'}}>
        <Image
          source={{uri: `https://i.pravatar.cc/150?img=4`}}
          style={{
            width: 60,
            height: 60,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 30,
          }}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <View style={{backgroundColor: 'lavender', alignItems: 'center'}}>
          <Text style={styles.titleText}>frank dog</Text>
          <Text style={styles.subtitle}>@frankDOG</Text>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'purple'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.subtitle}>company</Text>
            <Text style={styles.subtitle}>frankDog & co.</Text>
          </View>
          <Text style={{marginHorizontal: 10, fontSize: 25}}>|</Text>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.subtitle}>website</Text>
            <Text style={styles.subtitle}>frankiedog.com</Text>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'coral'}}>
        <Text style={styles.subtitleText}>email</Text>
        <Text style={styles.body}>bork@email.com</Text>
        <Text style={styles.subtitleText}>phone</Text>
        <Text style={styles.body}>808-344-7521</Text>
        <Text style={styles.subtitleText}>address</Text>
        <Text style={styles.body}>1234 Dogfarm Ln Seattle WA 98114</Text>
      </View>
    </View>
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
