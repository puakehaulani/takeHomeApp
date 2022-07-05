import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, Image, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = {
    shadow: {
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    titleText: {
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
        fontSize: 18,
        fontFamily: 'ArialMT',
        marginBottom: 10,
    },
    boldText: {
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
}


export default storiesOf('User Profile', module)
    .add('light', () => (
        <View style={{ height: '100%' }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 200,
                }}>
                <Image
                    source={{ uri: `https://i.pravatar.cc/150?img=7` }}
                    style={{
                        width: 160,
                        height: 160,
                        borderWidth: 1,
                        borderColor: 'transparent',
                        borderRadius: 80,
                        zIndex: 1,
                        elevation: 5
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
                            <Text style={[styles.titleText, { textAlign: 'center' }]}>User's First & Last Name</Text>
                            <Text style={styles.subtitleText}>@username</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.smallTitleText}>company</Text>
                            <Text style={styles.boldText}>User's Company</Text>
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
                            <Text style={styles.boldText}>User's Website</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 25, marginTop: 10 }}>
                <Text style={styles.smallTitleText}>email</Text>
                <Text style={styles.bodyText}>User's Email</Text>
                <Text style={styles.smallTitleText}>phone</Text>
                <Text style={styles.bodyText}>User's Phone</Text>
                <Text style={styles.smallTitleText}>address</Text>
                <Text style={styles.bodyText}>
                    User Address Suite and Street
                </Text>
                <Text style={styles.bodyText}>
                    User Address City and Zipcode
                </Text>
            </View>
        </View>
    ))
    .add('dark', () => (
        <View style={{ height: '100%', backgroundColor: '#121212' }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 200,

                }}>
                <Image
                    source={{ uri: `https://i.pravatar.cc/150?img=7` }}
                    style={{
                        width: 160,
                        height: 160,
                        borderWidth: 1,
                        borderColor: 'transparent',
                        borderRadius: 80,
                        zIndex: 1,
                        elevation: 5
                    }}
                />
                <View
                    style={[
                        {
                            borderWidth: 1,
                            borderRadius: 20,
                            borderColor: '#121212',
                            width: 0.9 * width,
                            alignItems: 'center',
                            backgroundColor: '#121212',
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
                            <Text style={[styles.titleText, { color: '#FAF9F6', textAlign: 'center' }]}>User's First & Last Name</Text>
                            <Text style={styles.subtitleText}>@username</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.smallTitleText, { color: '#FAF9F6' }]}>company</Text>
                            <Text style={[styles.boldText, { color: '#FAF9F6' }]}>User's Company</Text>
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
                            <Text style={[styles.boldText, { color: '#FAF9F6' }]}>User's Website</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 25, marginTop: 10 }}>
                <Text style={styles.smallTitleText}>email</Text>
                <Text style={[styles.bodyText, { color: '#FAF9F6' }]}>User's Email</Text>
                <Text style={styles.smallTitleText}>phone</Text>
                <Text style={[styles.bodyText, { color: '#FAF9F6' }]}>User's Phone</Text>
                <Text style={styles.smallTitleText}>address</Text>
                <Text style={[styles.bodyText, { color: '#FAF9F6' }]}>
                    User Address Suite and Street
                </Text>
                <Text style={[styles.bodyText, { color: '#FAF9F6' }]}>
                    User Address City and Zipcode
                </Text>
            </View>
        </View>
    ))
