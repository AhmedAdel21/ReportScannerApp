import {FlatList, View, Text,StatusBar,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { ListItem, Avatar,Icon} from 'react-native-elements';
import React,{useState,useRef}  from 'react';
import { useSelector } from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {DrawerActions } from '@react-navigation/native';

// import CustomCrop from "react-native-perspective-image-cropper";


function Home ({navigation}){
    const [image, setimage] = useState('')
    const user = useSelector(state => state.user)
    const imageCrop = useRef(null)
    const tog = () =>{
        
    }
    const renderMenuItem = ({item,index}) => {
        return(
            <ListItem bottomDivider>
                <Avatar source={require('../images/LogoSmall.png')} />
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
    if (image) {
        return(
            <View style={{flex:1}}>
                <Image source={{ uri: image }} style={styles.preview} />
                {/* <CustomCrop
                updateImage={imageAfterCroping}
                // rectangleCoordinates={this.state.rectangleCoordinates}
                initialImage={image}
                ref={ref => (imageCrop = ref)}
                overlayColor="rgba(18,190,210, 1)"
                overlayStrokeColor="rgba(20,190,210, 1)"
                handlerColor="rgba(20,150,160, 1)"
                enablePanStrict={false}
                />
                <TouchableOpacity onPress={() => crop()}>
                    <Text>CROP IMAGE</Text>
                </TouchableOpacity> */}
            </View>
        )
    } else {
        return(
            <View style={{flex: 1, backgroundColor:'#55A8D9'}}>
                <StatusBar backgroundColor='#55A8D9'/>
                <View style={styles.WelcomBar}>
                    <Icon name="menu" size={30} color= 'white' onPress={ () => props.navigation.dispatch(DrawerActions.toggleDrawer()) }/>
                    <Text style={styles.WelcomBarText}>
                        welcome {user.surname}
                    </Text>
                </View>
                
                <FlatList
                    data={user.data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderMenuItem}
                />
                <Icon name="camera" size={30} color= 'white'
                    onPress={ () => launchCamera(
                                {
                                    saveToPhotos: true,
                                    mediaType: 'photo',
                                    includeBase64: true,
                                    maxHeight: 200,
                                    maxWidth: 200,
                                    quality:0.1,
                                    
                                },
                                (response) => {
                                    console.log(response);
                                    if(response.didCancel){
                                        console.log("user cancel Camera")
                                    }
                                    else if(response.errorCode){
                                        console.log(response.errorCode)
                                    }
                                    else{
                                        setimage(response.uri)
                                    }
                                },
                        ) }/>
                <Text>
                    doladasdsad
                    asdas
                    asd
                    asd
                    as
                    const dispatch = useDispatch(d
                    asd)
                </Text>
                
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

  });

export default Home;