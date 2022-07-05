import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, Switch, Pressable, Image } from 'react-native';
import { UserProfile } from '../../src/components'


const styles = {
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

};


export const CenteredView = ({ children }) => (
    <View style={styles.center}>
        {children}
    </View>
);

export * from './Toggle.stories'
export * from './UserListItem.stories'
export * from './UserProfile.stories'