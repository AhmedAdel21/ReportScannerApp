import React, { useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector,useDispatch } from 'react-redux';
import {Image, StyleSheet, View, Text} from 'react-native';
import { Icon } from 'react-native-elements';
import { createDrawerNavigator,DrawerItemList } from '@react-navigation/drawer';
import PatientHome from './patienttHomeComponent';
import Camera from './cameraComponent';
import PicDetial from './picDetial';
import Login from './loginComponent';
import Signup from './signupComponents';
import ReportTextInput from './reportInputComponent';
import ReportTextOutput from './ocrOutputComponent';
import DoctorHome from './doctorHomeComponent';
const Stack  = createStackNavigator(); 
const Drawer = createDrawerNavigator();


const PatientHomeNavigator = ({ navigation }) => {
    return(
        <Stack.Navigator initialRouteName="PatientHome" screenOptions={{headerShown: false}} >
            <Stack.Screen name="PatientHome" component={PatientHome}  />
            <Stack.Screen name="Camera" component={Camera}  />
            <Stack.Screen name="PicDetial" component={PicDetial}  />
            <Stack.Screen name="ReportTextInput" component={ReportTextInput}  />
            <Stack.Screen name="ReportTextOutput" component={ReportTextOutput}  />
        </Stack.Navigator>
    );

}
const DoctortHomeNavigator = ({ navigation }) => {
    return(
        <Stack.Navigator initialRouteName="DoctorHome" screenOptions={{headerShown: false}} >
            <Stack.Screen name="DoctorHome" component={DoctorHome}  />
        </Stack.Navigator>
    );

}


export default function Main (){
    const isLoggedIn  = useSelector(state => state.user.logedin)
    const userType  = useSelector(state => state.user.type)
    const user = useSelector(state => state.user)

    const CustomDrawerContentComponent = (props) => (
        <ScrollView>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
            <Image style={styles.Image} source={require('./images/LogoSmall.png')} />
              <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}> Welcome {user.surname} </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        </ScrollView>
      );

    if (isLoggedIn ) {
        if(userType == 'patient' ){
            console.log("we are loged in as a patient")
            return(
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="PatientHome" drawerStyle={{backgroundColor: '#55A8D9'}} drawerContent={(props) => CustomDrawerContentComponent (props)} >
                        <Drawer.Screen name='PatientHome' component={PatientHomeNavigator}  options={{drawerIcon:({ tintColor }) => (<Icon name='list' type='font-awesome' size={24} color={tintColor}/>) ,title: "Menu"}}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            );

    }else if (userType == 'doctor' ) {
        console.log("we are loged in as a doctor")
        return(
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="DoctorHome" drawerStyle={{backgroundColor: '#55A8D9'}} drawerContent={(props) => CustomDrawerContentComponent (props)} >
                    <Drawer.Screen name='DoctorHome' component={DoctortHomeNavigator}  options={{drawerIcon:({ tintColor }) => (<Icon name='list' type='font-awesome' size={24} color={tintColor}/>) ,title: "Menu"}}/>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
    }else {
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