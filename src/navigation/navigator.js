import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Profile from '../screens/profile'
import { Image } from 'react-native'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabOptions = {
    
}
const screenOptionStyle = {
    headerShown: false,
    headerTitle: 'HOMEMEE'
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="Home" screenOptions={{ headerShown: false }} component={Home} options={{
                tabBarLabel: "",
                tabBarIcon: () => (
                    <Image 
                        source={require("../assets/icons/home.png")}
                        style={{height: 20, width: 20}}
                    />
                )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: "",
                tabBarIcon: () => (
                    <Image 
                        source={require("../assets/icons/profile.png")}
                        style={{height: 20, width: 20}}
                    />
                )
            }}/>
        
        </Tab.Navigator>
    )
}
const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="HomeStack" component={BottomTabNavigator} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;