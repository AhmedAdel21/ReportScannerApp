import {FlatList, View, Text} from 'react-native';
import {Tile } from 'react-native-elements';
import React  from 'react';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

function PicDetial (props){
    const { navigate } = props.navigation;
    const pictaken = props.route.params.picTaken;
    console.log("we are in picDetail")
    console.log(pictaken)
    const renderMenuItem = ({item,index}) => {
        return(
            <Animatable.View animation="fadeInRightBig" duration={2000}> 
                <Tile
                imageSrc= {{uri:item.img}}
                featured
                key={index.toString()} bottomDivider
                />
            </Animatable.View>
            
        );
    }

    return(
        <FlatList
        data={pictaken}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMenuItem}
        />
    );
}


export default PicDetial;