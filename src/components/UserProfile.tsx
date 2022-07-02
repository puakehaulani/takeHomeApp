import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export const UserProfile = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: `https://i.pravatar.cc/150?img=4`}}
          style={{
            width: 160,
            height: 160,
            borderWidth: 1,
            borderColor: 'transparent',
            borderRadius: 80,
            zIndex: 1,
          }}
        />
        <View
          style={[
            {
              borderWidth: 1,
              borderRadius: 20,
              borderColor: 'white',
              width: 0.9 * width,
              alignItems: 'center',
              backgroundColor: 'white',
              zIndex: 0.1,
              paddingTop: 120,
              position: 'absolute',
              left: Dimensions.get('window').width * 0.05,
              top: Dimensions.get('window').height * 0.06,
            },
            styles.shadow,
          ]}>
          <View style={{flexDirection: 'column'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.titleText}>frank dog</Text>
              <Text style={styles.subtitleText}>@frankDOG</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.smallTitleText}>company</Text>
              <Text style={styles.boldText}>frankDog & co.</Text>
            </View>
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 40,
                color: 'gray',
                fontFamily: 'AvenirNext-UltraLight',
              }}>
              |
            </Text>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.smallTitleText}>website</Text>
              <Text style={styles.boldText}>frankiedog.com</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 160}}>
        <Text style={styles.smallTitleText}>email</Text>
        <Text style={styles.bodyText}>bork@email.com</Text>
        <Text style={styles.smallTitleText}>phone</Text>
        <Text style={styles.bodyText}>808-344-7521</Text>
        <Text style={styles.smallTitleText}>address</Text>
        <Text style={styles.bodyText}>1234 Dogfarm Ln Seattle WA 98114</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  titleText: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'ArialRoundedMTBold',
  },
  subtitleText: {
    color: 'gray',
    fontSize: 20,
    fontFamily: 'ArialMT',
    marginBottom: 10,
  },
  bodyText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'ArialMT',
    marginBottom: 10,
  },
  boldText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'ArialMT',
  },
  smallTitleText: {
    color: 'gray',
    fontSize: 15,
    fontFamily: 'ArialMT',
    marginBottom: 5,
  },
});
