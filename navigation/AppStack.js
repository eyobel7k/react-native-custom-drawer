import React from "react";
// import { View, Text } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnboardingScreen from "../screens/OnboardingScreen";
import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MomentsScreen from "../screens/MomentsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CustomDrawer from "../components/CustomDrawer";

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer{...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen 
                name="Onboarding" 
                component={OnboardingScreen} 
            />
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
            />
            <Drawer.Screen 
                name="Profile" 
                component={ProfileScreen} 
            />
            <Drawer.Screen 
                name="Messages" 
                component={MessagesScreen} 
            />
            <Drawer.Screen 
                name="Moments" 
                component={MomentsScreen} 
            />
            <Drawer.Screen 
                name="Settings" 
                component={SettingsScreen} 
            />
        </Drawer.Navigator>
    );
};

export default AppStack;