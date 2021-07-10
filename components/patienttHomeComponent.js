import {FlatList, View, Text,StatusBar,StyleSheet,TouchableOpacity,Image,Modal,Button} from 'react-native';
import { ListItem, Avatar,Icon} from 'react-native-elements';
import React,{useState,useRef}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {DrawerActions } from '@react-navigation/native';
import {photoUpload,photoDownload} from '../redux/images'
import { baseUrl } from '../shared/baseUrl';
import LottieView from "lottie-react-native"
import { RNCamera } from 'react-native-camera';

function PatientHome ({navigation}){

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const renderMenuItem = ({item,index}) => {
        return(
            <ListItem bottomDivider>
                <Avatar source={require('./images/LogoSmall.png')} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            
        );
    }

    return(
        <View style={{flex: 1, backgroundColor:'#55A8D9'}}>
            <StatusBar backgroundColor='#55A8D9'/>
            <View style={styles.WelcomBar}>
                <Icon name="menu" size={30} color= 'white' onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer()) }/>
                <Text style={styles.WelcomBarText}>
                    welcome {user.surname}
                </Text>
            </View>
            <View style={{flex:2}}>
                <FlatList
                    data={user.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderMenuItem}
                />
            </View>
            <View style={styles.cameraIcon}>
                <Icon name="camera" size={40} color= 'black'
                    type='font-awesome'
                    onPress={ () => navigation.navigate('Camera') }/>
            </View>
            <View style={styles.textIcon}>
                <Icon name="pencil" size={40} color= 'black'
                    type='font-awesome'
                    onPress={ () => navigation.navigate('ReportTextInput') }/>
            </View>

            
        </View>
        
    );
    
    
    
}


const styles = StyleSheet.create({
    Image: {margin:20},
    WelcomBar: {
        // alignItems: 'center' ,
        flexDirection: 'row',
        backgroundColor:'#55A8D9' ,
        marginTop:20,
        marginLeft:10,
        marginBottom:10
        },
    WelcomBarText: {
        fontSize:20,
        color:'white',
        marginLeft:20,
        fontWeight:'bold',
        
    },
    cameraIcon:{             
                
        position: 'absolute',                                          
        bottom: 50,                                                    
        right: 30,
    },
    textIcon:{             
                
        position: 'absolute',                                          
        bottom: 50,                                                    
        right: 80,
    },
    preview: {
        flex: 1,
        width: "100%",
        height:'100%',
        resizeMode: "cover",
      },
    Button:{
        marginTop:10,
        borderRadius:20,
        width:120,
        borderColor:'white',
        borderEndWidth:1,
        },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        },
    capture: {
        flex: 0,
        // backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 10,
        alignSelf: 'center',
        margin: 20,
        },

  });

export default PatientHome;