import React, { version,useState } from 'react';
import { Text, ScrollView, View, Image ,StyleSheet, StatusBar,TextInput ,TouchableOpacity } from 'react-native';
import { Card, Input, Icon ,SocialIcon,Button  } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import {singup} from '../redux/user';

export default function Signup (props){
    const { navigate } = props.navigation;
    const [firstname,setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [mobOrEmail, setMobOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const firstnameRef = React.createRef();
    const surnameRef = React.createRef();
    const mobOrEmailRef = React.createRef();
    const passwordRef = React.createRef();

    const dispatch = useDispatch();

    const sendingData = (firstname,surname,mobOrEmail,password) => {
        const newUser = {
            firstname:firstname,
            surname:surname,
            username:mobOrEmail,
            password:password
          }
        dispatch(singup(newUser))
        setFirstname(''); setSurname(''); setMobOrEmail(''); setPassword('');
        firstnameRef.current.clear(); surnameRef.current.clear();mobOrEmailRef.current.clear();
        passwordRef.current.clear();
    }
    return(
        <View style={{flex: 1, backgroundColor:'#55A8D9'}}>
            <StatusBar backgroundColor='#55A8D9'/>
            <View style={styles.contianer}>
                <View style={styles.Image}>
                    <Image  source={require('../images/LogoSmall.png')} />
                </View>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'white',fontSize:25, fontWeight:'bold'}}>  Sign Up</Text>
                    <Text>          It's quick and easy.</Text>
                </View>
                <View style={{width:'100%'}}>
                    <Input  
                        placeholder='First Name' inputContainerStyle={{borderBottomColor:'white'}} 
                        placeholderTextColor='#D6D8DA'  
                        onChangeText = {value  => setFirstname(value)} 
                        ref={firstnameRef}  />
                    <Input
                        placeholder='Surname' inputContainerStyle={{borderBottomColor:'white'}} 
                        placeholderTextColor='#D6D8DA' 
                        onChangeText = {value  => setSurname(value)}  
                        ref={surnameRef}  />
                    <Input
                        placeholder='Mobile number or email address' inputContainerStyle={{borderBottomColor:'white'}} 
                        placeholderTextColor='#D6D8DA' 
                        onChangeText = {value  => setMobOrEmail(value)} 
                        ref={mobOrEmailRef}  />
                    <Input  
                        placeholder='Password' inputContainerStyle={{borderBottomColor:'white'}} 
                        placeholderTextColor='#D6D8DA'  secureTextEntry={true}
                        onChangeText = {value  => setPassword(value)} 
                        ref={passwordRef}  />
                </View>
                <View style={{}}>
                    <Text style={{fontSize:11,marginLeft:10,color:'#D6D8DA'}}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</Text>
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
                        onPress={()=>{sendingData(firstname,surname,mobOrEmail,password);}}
                        />
                </View>


            </View>
        </View>
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

  });