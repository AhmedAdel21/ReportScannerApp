import React, { useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector,useDispatch } from 'react-redux';
import {Image, StyleSheet, View, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator,DrawerItemList } from '@react-navigation/drawer';
import Home from '../home/home';
import Camera from '../home/camera';
import Login from '../user/loginComponent';
import Signup from '../user/signupComponents';



const Stack  = createStackNavigator(); 
const Drawer = createDrawerNavigator();


const homeNavigator = ({ navigation }) => {
    return(
        <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown: false}} >
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Camera" component={Camera}  />
        </Stack.Navigator>
    );

}



export default function Main (){
    const isLoggedIn  = useSelector(state => state.user.logedin)
    const user = useSelector(state => state.user)

    const CustomDrawerContentComponent = (props) => (
        <ScrollView>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
            <Image style={styles.Image} source={require('../images/LogoSmall.png')} />
              <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}> Welcome {user.surname} </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        </ScrollView>
      );

    if (true ) {
        console.log("we are loged in")
        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#55A8D9'}} drawerContent={(props) => CustomDrawerContentComponent (props)} >
                    <Drawer.Screen name='Home' component={homeNavigator}  options={{drawerIcon:({ tintColor }) => (<Icon name='list' type='font-awesome' size={24} color={tintColor}/>) ,title: "Menu"}}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    } else {
        console.log("we are not loged in")
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Signup" component={Signup}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }


}



const styles = StyleSheet.create({
    Image: {
        margin:10,
        width:80,
        height:60
    },
    drawerHeader: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center' ,
        marginTop:20},
    Button:{
        marginTop:10,
        borderRadius:20,
        width:120,
        borderColor:'white',
        borderEndWidth:1,
        },

  });