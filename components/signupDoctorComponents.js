import React, { version,useState } from 'react';
import { Text, ScrollView, View, Image ,StyleSheet, StatusBar,TextInput ,TouchableOpacity } from 'react-native';
import { Card, Input, Icon ,SocialIcon,Button,CheckBox   } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import {singup} from '../redux/user';

export default function SignupDoctor (props){
    const { navigate } = props.navigation;
    const [phoneNumber, setphoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const firstnameRef = React.createRef();
    const surnameRef = React.createRef();
    const phoneNumberRef = React.createRef();
    const passwordRef = React.createRef();
    const [doctorFlag,setDoctorFlag] = useState(false);
    const [patientFlag,setPatientFlag] = useState(false);
    const dispatch = useDispatch();

    const sendingData = (phoneNumber,password) => {
        const newUser = {
            username:phoneNumber,
            password:password
          }
        dispatch(singup(newUser))
        firstnameRef.current.clear(); surnameRef.current.clear();phoneNumberRef.current.clear();
        passwordRef.current.clear();
    }
    return(
        <ScrollView style={{flex: 1, backgroundColor:'#55A8D9'}}>
            <StatusBar backgroundColor='#55A8D9'/>
            <View style={styles.contianer}>
                <View style={styles.Image}>
                    <Image  source={require('./images/LogoSmall.png')} />
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white',fontSize:25, fontWeight:'bold'}}>  Sign Up</Text>
                    <Text>          It's quick and easy.</Text>
                </View>
                <View style={{width:'100%'}}>
                    <Input
                        placeholder='Phone number' inputContainerStyle={{borderBottomColor:'white'}} 
                        placeholderTextColor='#D6D8DA' 
                        onChangeText = {value  => setphoneNumber(value)} 
                        ref={phoneNumberRef}  />
                    <Input  
                        placeholder='Password' inputContainerStyle={{borderBottomColor:'white'}} 
                        placeholderTextColor='#D6D8DA'  secureTextEntry={true}
                        onChangeText = {value  => setPassword(value)} 
                        ref={passwordRef}  />
                </View>

                <View style={{alignItems:'center'}}>
                    <Button 
                        icon={
                            <Icon
                            type='font-awesome' name="sign-in"
                            size={30}
                            color="white"
                            />
                        }
                        title="   Sign Up"
                        buttonStyle={styles.Button}
                        loading= {false}
                        type="outline"
                        containerStyle={{color:'white'}}
                        titleStyle={{color:'white'}}
                        onPress={()=>{sendingData(phoneNumber,password);}}
                        />
                </View>


            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    Image: {
        margin:20,
        alignItems: 'center' ,
    },
    contianer: {
        flexDirection: 'column',
        flex: 1,
        
        backgroundColor:'#55A8D9' ,
        marginTop:10},
    Button:{
        marginTop:20,
        alignItems: 'center' ,
        borderRadius:20,
        width:120,
        borderColor:'white',
        borderEndWidth:1,
        },
    checkboxContainer:{
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom:10,
    },
    checkbox:{
        backgroundColor:'#55A8D9' ,
        borderWidth:1,
        borderRadius:20,
    }
  });