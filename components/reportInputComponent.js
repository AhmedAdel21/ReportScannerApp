import {View, Text,StatusBar,StyleSheet,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {Button,Icon} from 'react-native-elements';
import React,{useState}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {DrawerActions } from '@react-navigation/native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

function ReportTextInput ({navigation}){
   
    const user = useSelector(state => state.user)
    const dola = []
    const dispatch = useDispatch()
    var tableHead = ['Measurement', 'Value','Units'];
    var tableData = [
      ['RBC', 0, '10^6/ul'],
      ['HGB', 0, 'g/dl'],
      ['HCT', 0, '%'],
      ['MCV', 0, 'Um^3'],
      ['MCH', 0, 'pg'],
      ['MCHC', 0, 'g/dl'],
      ['RDW', 0, '%'],
      ['WBC', 0, '10^3/ul'],
      ['LYM', 0, '%'],
      ['LYM', 0, '10^3/ul'],
      ['MON', 0, '%'],
      ['MON', 0, '10^3/ul'],
      ['GRA', 0, '%'],
      ['GRA', 0, '10^3/ul'],
      ['PLT', 0, '10^3/ul'],
      ['MPV', 0, 'Um^3'],
      ['PCT', 0, '%'],
      ['PDW', 0, '%'],
    ]
    var dataInserted = [
        ['RBC', ''],
        ['HGB', ''],
        ['HCT', ''],
        ['MCV', ''],
        ['MCH', ''],
        ['MCHC',''],
        ['RDW', ''],
        ['WBC', ''],
        ['LYM', ''],
        ['LYM', ''],
        ['MON', ''],
        ['MON', ''],
        ['GRA', ''],
        ['GRA', ''],
        ['PLT', ''],
        ['MPV', ''],
        ['PCT', ''],
        ['PDW', ''],
    ]
    const element = (index) => (
        <TextInput
        style={{alignSelf:'center'}}
        onChangeText={(value) => setItemValue(value,index)}
        placeholder="***"
      />
      );
    const setItemValue = (value,index) => {
        dataInserted[index][1] = value;
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

                <View style={styles.container}>
                    <Table borderStyle={{borderWidth: 2, borderColor: '#ffff'}}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    </Table>
                    <ScrollView style={{backgroundColor:'#fff'}}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#ffff'}}>
                        {
                            tableData.map((rowData, index) => (
                            <TableWrapper key={index} style={index%2? styles.row2 : styles.row1}>
                                {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell  key={cellIndex} data={cellIndex === 1 ? element(index) : cellData} textStyle={styles.text}/>
                                ))
                                }
                            </TableWrapper>
                            ))
                        }
                    </Table>
                        <View style={styles.buttomContainerStyle}>
                            <Button 
                                icon={
                                    <Icon
                                    type='font-awesome' name="times"
                                    size={30}
                                    color="white"
                                    />
                                }
                                title=""
                                buttonStyle={styles.ButtoncancelStyle}
                                loading= {false}
                                type="outline"
                                containerStyle={{color:'black'}}
                                titleStyle={{color:'black'}}
                                onPress={   ()=>  navigation.navigate('Home')   }

                                />
                                <Button 
                                icon={
                                    <Icon
                                    type='font-awesome' name="check"
                                    size={30}
                                    color="white"
                                    />
                                }
                                title=""
                                buttonStyle={styles.ButtonUploadStyle}
                                loading= {false}
                                type="outline"
                                containerStyle={{color:'black'}}
                                titleStyle={{color:'black'}}
                                onPress={   ()=>   {  console.log("data",dataInserted)   }}

                                />
                        </View>
                    </ScrollView>
                </View>
                
            </View>
            
        );
        
    
    
}


const styles = StyleSheet.create({
    Image: {margin:20},
    WelcomBar: {
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
    container: { flex: 1, padding:0, paddingTop: 0 },
    head: { height: 40, backgroundColor: '#FFFFFF' },
    text: { margin: 6 ,alignSelf:'center'},
    row1: { flexDirection: 'row', backgroundColor: '#8BC0E0' },
    row2: { flexDirection: 'row', backgroundColor: '#A3CBE3' },
    buttomContainerStyle: {
        flex:1,
        backgroundColor:'#fff',
        flexDirection: 'row',
        alignSelf:'center',
        paddingBottom:20,
      },
    ButtonUploadStyle:{
        backgroundColor: '#38C829',
        margin:10,
        marginLeft:20,
        borderRadius:50,
        width:50,
        borderColor:'black',
        borderEndWidth:1,
        },
    ButtoncancelStyle:{
            backgroundColor: '#EE3413',
            margin:10,
            marginRight:50,
            borderRadius:20,
            width:50,
            borderColor:'white',
            borderEndWidth:1,
        },
  });

export default ReportTextInput;