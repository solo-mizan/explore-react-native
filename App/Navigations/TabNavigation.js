import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Fav from '../Screens/Fav';
import Profile from '../Screens/Profile';

// tab icons 
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>

            {/* Home tab  */}
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={24} color="black" />
                )
                }}
            />

            {/* Search tab */}
            <Tab.Screen name="Search" component={Search}
           options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="search-location" size={24} color="black" />
                )
                }}
            />

            {/* Favourite tab */}
            <Tab.Screen name="List" component={Fav}
           options={{
                    tabBarLabel: "List",
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="list-ol" size={24} color="black" />
                )
                }}
            />

            {/* Profile tab */}
            <Tab.Screen name="Profile" component={Profile}
             options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" size={24} color="black" />
                )
                }}
            />
    </Tab.Navigator>
  )
}