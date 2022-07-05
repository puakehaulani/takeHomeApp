import React from 'react';
// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     useColorScheme,
//     View,
//     Pressable,
//     Text,
//     ActivityIndicator,
//     Dimensions,

// } from 'react-native';
// import { useNetInfo } from "@react-native-community/netinfo";
// import BlinkView from 'react-native-blink-view'
// import { ThemeContext } from '../context/themeContext';
// import { UserList } from '../components/UserList';

export const useGetUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json(response.data))
        .then(responseJson => {
            return responseJson
        })
        .catch(error => {
            console.error(error);
        });
};