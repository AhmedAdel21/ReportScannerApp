import {FlatList, View, Text,StatusBar,StyleSheet} from 'react-native';
import { ListItem, Avatar,Icon} from 'react-native-elements';
import React  from 'react';
import { useSelector } from 'react-redux';
import { color } from 'react-native-reanimated';
import {DrawerActions } from '@react-navigation/native';
function Menu (props){
    const { navigate } = props.navigation;
    const user = useSelector(state => state.user)
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
    Button:{
        marginTop:10,
        borderRadius:20,
        width:120,
        borderColor:'white',
        borderEndWidth:1,
        },

  });

export default Menu;