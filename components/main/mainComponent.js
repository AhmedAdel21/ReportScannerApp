// import 'react-native-gesture-handler';
import React, { useEffect} from 'react';
// import { ScrollView } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
import {Image, StyleSheet, View, Text,SafeAreaView , ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator,DrawerItemList } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Login from '../user/loginComponent'
const Stack  = createStackNavigator(); 
// const Drawer = createDrawerNavigator();
//loginNavigator
export default function Main (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
                <Stack.Screen name="Login" component={Login}/>
                {/* <Stack.Screen name="Dishdetail" component={Dishdetail}  options={{ title: 'Dish detail' }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );

}