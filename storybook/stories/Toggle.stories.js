import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, Switch, Pressable, Image } from 'react-native';
import { CenteredView } from './index'


const styles = {
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
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


storiesOf('Toggle', module)
    .add('light', () => {
        const enabled = true
        const toggleSwitch = () => {
            enabled = (previousState => !previousState)
        }
        return (
            <CenteredView>
                <Switch
                    trackColor={{ false: '#D3D3D3', true: "#899499" }}
                    thumbColor={"#ffffa7"}
                    ios_backgroundColor="#D3D3D3"
                    onValueChange={toggleSwitch}
                    value={enabled}
                />
            </CenteredView>
        )
    })
    .add('dark', () => {
        const enabled = true
        const toggleSwitch = () => {
            enabled = (previousState => !previousState)
        }
        return (
            <CenteredView>
                <Switch
                    trackColor={{ false: '#D3D3D3', true: "#899499" }}
                    thumbColor={"#CCCCFF"}
                    ios_backgroundColor="#D3D3D3"
                    onValueChange={toggleSwitch}
                    value={enabled}
                />
            </CenteredView>
        )
    });

