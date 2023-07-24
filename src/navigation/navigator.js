import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Profile from '../screens/profile'
import { Image } from 'react-native'
import colors from "../theme/colors";
import Shop from "../screens/shop";
import Community from "../screens/community";
import CaptureButton from "../components/atoms/CaptureButton";
import CapturePhoto from "../screens/CapturePhoto";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabOptions = {
    
}
const screenOptionStyle = {
    headerShown: false,
    headerTitle: 'Home'
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle:  {
                    height: 72,
                    // borderTopLeftRadius: 30,
                    // borderTopRightRadius: 30,
                    // position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#b8e0d2',
                },
            }}
        >
            <Tab.Screen name="Home" screenOptions={{ headerShown: false }} component={Home} options={{
                tabBarLabel: "Home",
                tabBarLabelPosition: 'below-icon',
                tabBarIcon: ({ focused }) => (
                    <Image 
                        source={require("../assets/icons/home.png")}
                        style={{height: 24, width: 24, tintColor: focused ? colors.primary : colors.black}}
                    />
                ),
                tabBarLabelStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                tabBarIconStyle: {
                    bottom: -5,
                    flex: 1,
                    alignItems: 'center',
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
            }}/>
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarLabel: "Shop",
                tabBarIcon: ({ focused }) => (
                    <Image 
                        source={require("../assets/icons/shop.png")}
                        style={{height: 24, width: 24, tintColor: focused ? colors.primary : colors.black }}
                    />
                ),
                tabBarLabelStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                tabBarIconStyle: {
                    bottom: -5,
                    flex: 1,
                    alignItems: 'center',
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
            }}/>
            {/* <Tab.Screen name="Capture" component={CapturePhoto} options={{
                tabBarLabel: "Diagnose",
                tabBarIcon: () => (
                    <CaptureButton />
                ),
                tabBarLabelStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                tabBarIconStyle: {
                    bottom: -5,
                    flex: 1,
                    alignItems: 'center',
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
            }}/> */}
            <Tab.Screen name="Community" component={Community} options={{
                tabBarLabel: "Community",
                tabBarIcon: ({ focused }) => (
                    <Image 
                        source={require("../assets/icons/community.png")}
                        style={{height: 24, width: 24, tintColor: focused ? colors.primary : colors.black }}
                    />
                ),
                tabBarLabelStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                tabBarIconStyle: {
                    bottom: -5,
                    flex: 1,
                    alignItems: 'center',
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ focused }) => (
                    <Image 
                        source={require("../assets/icons/profile.png")}
                        style={{height: 24, width: 24, tintColor: focused ? colors.primary : colors.black }}
                    />
                ),
                tabBarLabelStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                tabBarIconStyle: {
                    bottom: -5,
                    flex: 1,
                    alignItems: 'center',
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.black,
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