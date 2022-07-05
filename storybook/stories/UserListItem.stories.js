import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, Image } from 'react-native';
import { CenteredView } from '.';


const styles = {
    shadow: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'ArialRoundedMTBold',
    },
    subtitleText: {
        color: 'gray',
        fontSize: 14,
        fontFamily: 'ArialMT',
    },
    bodyText: {
        fontSize: 12,
        fontFamily: 'ArialMT',
    },
    boldText: {
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'ArialMT',
    },
};


storiesOf('User List Item', module)
    .add('light', () => (
        <CenteredView>
            <View
                style={[
                    {
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#FAF9F6',
                        height: 70,
                        margin: 10,
                        alignItems: 'center',
                        backgroundColor: '#FAF9F6',
                        shadowColor: '#121212',
                    },
                    styles.shadow,
                ]}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                    <Image
                        source={{ uri: `https://i.pravatar.cc/150?img=7` }}
                        style={{
                            width: 60,
                            height: 60,
                            borderWidth: 1,
                            borderColor: '#FAF9F6',
                            borderRadius: 30,
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'column',
                    }}>
                    <Text style={[{ color: '#121212' }, styles.titleText]}>User First & Last Name</Text>
                    <Text style={styles.subtitleText}>User Email</Text>
                </View>
            </View>
        </CenteredView >
    ))
    .add('dark', () => (
        <CenteredView>
            <View
                style={[
                    {
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#121212',
                        height: 70,
                        margin: 10,
                        alignItems: 'center',
                        backgroundColor: '#121212',
                        shadowColor: '#FAF9F6',
                    },
                    styles.shadow,
                ]}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                    <Image
                        source={{ uri: `https://i.pravatar.cc/150?img=7` }}
                        style={{
                            width: 60,
                            height: 60,
                            borderWidth: 1,
                            borderColor: '#FAF9F6',
                            borderRadius: 30,
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'column',
                    }}>
                    <Text style={[{ color: '#FAF9F6' }, styles.titleText]}>User First & Last Name</Text>
                    <Text style={styles.subtitleText}>User Email</Text>
                </View>
            </View>
        </CenteredView>
    ))

