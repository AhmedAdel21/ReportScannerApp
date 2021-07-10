import React, { version,useState } from 'react';
import { Text, ScrollView, View, Image ,StyleSheet, StatusBar,TextInput ,TouchableOpacity } from 'react-native';
import { Card, Input, Icon ,SocialIcon,Button  } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import {signin} from '../redux/user';

export default function Login (props){
    const { navigate } = props.navigation;
    const [mobOrEmail, setMobOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const mobOrEmailRef = React.createRef();
    const passwordRef = React.createRef();
    const dispatch = useDispatch();

    const signingin = (mobOrEmail,password) => {
        const userIn = {
            username:mobOrEmail,
            password:password
          }
        dispatch(signin(userIn))
        setMobOrEmail(''); setPassword('');
        mobOrEmailRef.current.clear();passwordRef.current.clear();
    }

    return(
        <ScrollView style={{ backgroundColor:'#55A8D9'}}>
            <StatusBar backgroundColor='#55A8D9'/>
            <View style={styles.contianer}>
                <Image style={styles.Image} source={require('./images/LogoSmall.png')} />
                <View style={{width:'80%'}}>
                    <Input  
                        placeholder='Email address or phone number' inputContainerStyle={{borderBottomColor:'white'}} 
                        textContentType='username' placeholderTextColor='#D6D8DA'  
                        leftIcon={ <Icon style={{marginRight:20}} type='font-awesome' name='user' size={24} color='white'/>}
                        onChangeText = {value  => setMobOrEmail(value)} 
                        ref={mobOrEmailRef}
                    />
                    <Input  
                        placeholder='Password' inputContainerStyle={{borderBottomColor:'white'}} 
                        textContentType ='password' placeholderTextColor='#D6D8DA'  secureTextEntry={true} 
                        leftIcon={ <Icon style={{marginRight:20}} type='font-awesome' name='unlock-alt' size={24} color='white'/>}
                        onChangeText = {value  => setPassword(value)} 
                        ref={passwordRef}
                    />
                    <TouchableOpacity
                        style={{marginLeft:180,marginBottom:10}}
                        onPress={()=>{}}
                    >
                        <Text>Forget Password ?</Text>
                    </TouchableOpacity>
                </View>
                <Button 
                    icon={
                        <Icon
                        type='font-awesome' name="sign-in"
                        size={30}
                        color="white"
                        />
                    }
                    title="   Sign in"
                    buttonStyle={styles.Button}
                    loading= {false}
                    type="outline"
                    containerStyle={{color:'white'}}
                    titleStyle={{color:'white'}}
                    onPress={()=>{signingin(mobOrEmail,password);}}

                    />
                <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                        <Text>Don't have an accoun?</Text>
                        <TouchableOpacity
                            onPress={()=>navigate('Signup')}
                        >
                            <Text style={{color:'white',fontSize:15}}>  Sign Up</Text>
                        </TouchableOpacity>
                </View>
                <View style={{marginTop:20,width:300,height:50,marginBottom:90}}>
                    <SocialIcon title='Sign In With Facebook'
                    button
                    type='facebook'
                    onPress={()=>{}}
                    />
                    <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                    onPress={()=>{}}
                    />
                </View>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    Image: {margin:20},
    contianer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center' ,
        backgroundColor:'#55A8D9' ,
        marginTop:60},
    Button:{
        marginTop:10,
        borderRadius:20,
        width:120,
        borderColor:'white',
        borderEndWidth:1,
        },

  });