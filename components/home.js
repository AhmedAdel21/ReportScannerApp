import {FlatList, View, Text,StatusBar,StyleSheet,TouchableOpacity,Image,Modal,Button} from 'react-native';
import { ListItem, Avatar,Icon} from 'react-native-elements';
import React,{useState,useRef}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {DrawerActions } from '@react-navigation/native';
import {photoUpload,photoDownload} from '../redux/images'
import { baseUrl } from '../shared/baseUrl';
import LottieView from "lottie-react-native"
import { RNCamera } from 'react-native-camera';

function Home ({navigation}){
    const [image, setimage] = useState('')
    const [cameraView, setcameraView ] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.user)
    const imageCrop = useRef(null);
    var cameraRef = useRef(null);
    var spinnerAnimation = useRef(null);
    const dispatch = useDispatch()
    const tog = () =>{
        
    }
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
    // else if (dishes.errMess){
    //     return(
    //         <View>
    //             <Text>{dishes.errMess}</Text>
    //         </View>
    //     );
    // }
    function imageAfterCroping(image) {
        console.log(image);
    }
    function crop() {
            imageCrop.crop();
      }
    

    // const spinner = () => {
    //     return (
    //         <View style={{position:'absolute',
    //                 flex: 0,
    //                 borderRadius: 5,
    //                 padding: 50,
    //                 paddingHorizontal: 30,
    //                 marginTop:250,
    //                 alignSelf: 'center',
    //                 alignItems:'center',
    //                 margin: 20, }}>
    //             <LottieView
    //                     source={require('../shared/spinner.json')}
    //                     loop={false}
    //                     autoPlay={false}
    //                     ref={ref => spinnerAnimation = ref} 
    //                     // style={{alignItems:'center', backgroundColor:"black",position:'absolute' }}
    //                 />
    //           </View>
    //     )
    // }

    const takePicture = async () => {
        // setShowSpinner(true)
        if (cameraRef) {
            waittingAnimation();
          const options = { quality: 0.5, base64: false };
          const data = await cameraRef.takePictureAsync(options);
          console.log(data);
          
          succeededAnimation();
        //   hideAnimation();
        //   setShowSpinner(false)
        }
      };

    const waittingAnimation = () => {
        if (spinnerAnimation) {
            spinnerAnimation.current.play(1,250);
            // spinnerAnimation.current.play(1);
        }
        // setShowSpinner(true);
    }
    const succeededAnimation = () => {
        spinnerAnimation.current.play(250,400);
        // setShowSpinner(false);
        // spinnerAnimation.current.play(-1);
    }
    const faildAnimation = () => {
        spinnerAnimation.current.play(690,900)
    }
    const hideAnimation = ()=> {
        setShowSpinner(false)
    }
    const toggleModal = () =>{
        setShowModal(!showModal);
    }
    if (false){
        return (
            
            <View style={styles.container}> 
              <RNCamera
                ref={ref => cameraRef = ref }
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                // flashMode={RNCamera.Constants.FlashMode.on}
                // onPictureTaken={()=> waittingAnimation()}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}
              />
                <View 
                style={{position:'absolute',
                    flex: 0,
                    borderRadius: 5,
                    padding: 50,
                    paddingHorizontal: 30,
                    marginTop:250,
                    alignSelf: 'center',
                    alignItems:'center',
                    margin: 20, }}
                    >
                    <LottieView
                        source={require('../shared/spinner.json')}
                        loop={false}
                        autoPlay={false}
                        ref={spinnerAnimation}
                        onAnimationFinish= { ()=> {}} 
                        // style={{alignItems:'center', backgroundColor:"black",position:'absolute' }}
                        />
            </View>
            <Modal transparent={true}
                visible = {showModal}
                onDismiss = {() => toggleModal() }
                onRequestClose = {() => toggleModal() }>

                        <Button 
                            onPress = {() =>{toggleModal();}}
                            color="#512DA8"
                            title="Close" 
                            />
                    
                </Modal>


              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => takePicture()} style={styles.capture}>
                  <Icon name="camera" size={40} color= 'white' type='font-awesome'/>
                </TouchableOpacity>
              </View>
            </View>
          );
    }
    else if (false) {
        dispatch(photoUpload(image))
        return(
            <View style={{flex:1}}>
                <Image source={{ uri: image }} style={styles.preview} />
                <TouchableOpacity onPress={() => setimage('')}>
                    <Text>retry</Text>
                </TouchableOpacity>
            </View>
        )
    } else {
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
                        onPress={ () => navigation.navigate('TextInput') }/>
                </View>

                
            </View>
            
        );
        
    }
    
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

export default Home;