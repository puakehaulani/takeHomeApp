import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

export const UserProfile = props => {
  const user = props?.props;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={{ height: height }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 200,
        }}>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?img=${user.id}` }}
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
              paddingBottom: 10,
              position: 'absolute',
              left: Dimensions.get('window').width * 0.05,
              top: Dimensions.get('window').height * 0.06,
            },
            styles.shadow,
          ]}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.titleText}>{user.name}</Text>
              <Text style={styles.subtitleText}>@{user.username}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.smallTitleText}>company</Text>
              <Text style={styles.boldText}>{user.company.name}</Text>
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
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.smallTitleText}>website</Text>
              <Text style={styles.boldText}>{user.website}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <Text style={styles.smallTitleText}>email</Text>
        <Text style={styles.bodyText}>{user.email}</Text>
        <Text style={styles.smallTitleText}>phone</Text>
        <Text style={styles.bodyText}>{user.phone}</Text>
        <Text style={styles.smallTitleText}>address</Text>
        <Text style={styles.bodyText}>
          {user.address.suite.substr(-3, 3)} {user.address.street} Street
        </Text>
        <Text style={styles.bodyText}>
          {user.address.city}, TX {user.address.zipcode.substr(0, 5)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: 1, height: 3 },
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
