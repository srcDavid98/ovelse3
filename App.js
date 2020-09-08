import React from 'react';
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "./components/HomeScreen";
import { createAppContainer } from 'react-navigation';
import SettingStack from "./components/StackNavigation";
import {Image,StyleSheet} from "react-native-web";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    tabIcon: {
        width: 32,
        height: 32,
    },
});

// Denne TabNavigator holder styr på det yderste niveau af navigation i appen.
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,

            navigationOptions: {
                tabBarLabel:"Home Page",
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="home" size={24} color="black" />
                )
            },
        },
        Settings: {
            screen: SettingStack,
            navigationOptions: {
                tabBarLabel:"Settings",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-settings" size={30} color="black" />
                )
            },
        },
    },
    {
        tabBarOptions: {
            showIcon:true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            size:40
        },
    }

)


export default createAppContainer(TabNavigator)
