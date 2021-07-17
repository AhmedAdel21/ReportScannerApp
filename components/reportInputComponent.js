import {View, Text,StatusBar,StyleSheet,Modal,Pressable,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {Button,Icon} from 'react-native-elements';
import React,{useState}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {DrawerActions } from '@react-navigation/native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import {getReports,postReports} from '../redux/user';

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
    ['LYMP', ''],
    ['MON', ''],
    ['MONP', ''],
    ['GRA', ''],
    ['GRAP', ''],
    ['PLT', ''],
    ['MPV', ''],
    ['PCT', ''],
    ['PDW', ''],
    ['comment',''],
    ['name','']
]

function ReportTextInput ({navigation}){
   
    const user = useSelector(state => state.user)
    var patientId = user.id;
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
      ['LYMP', 0, '10^3/ul'],
      ['MON', 0, '%'],
      ['MONP', 0, '10^3/ul'],
      ['GRA', 0, '%'],
      ['GRAP', 0, '10^3/ul'],
      ['PLT', 0, '10^3/ul'],
      ['MPV', 0, 'Um^3'],
      ['PCT', 0, '%'],
      ['PDW', 0, '%'],
    ]
    
    const element = (index) => (
        <TextInput
        style={{alignSelf:'center'}}
        onChangeText={(value) => setItemValue(value,index)}
        placeholder="***"
        keyboardType="numeric"
      />
      );
    const setItemValue = (value,index) => {
        dataInserted[index][1] = value;
    }
    function arrayToJSONObject (arr){
        var jsonData = [];
        for(var i=0; i<arr.length; i++) {
            var Element = arr[i];
            o = {};
            o[Element[0]] = Element[1]
            jsonData.push(o);
        }
        return jsonData;
    }
    const uploadData =() =>{
        var sendingData = {};
        dataInserted.forEach((item) => {
            sendingData[item[0]]=item[1];
        })
        sendingData["patientId"] = patientId;
        sendingData["date"] = new Date().toISOString();
        console.log('data',sendingData);
        dispatch(postReports(sendingData));
        dispatch(getReports());
        navigation.navigate('PatientHome');
    }
    const [modalVisible, setModalVisible] = useState(false);
        return(
            <View style={{flex: 1, backgroundColor:'#55A8D9'}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {setModalVisible(!modalVisible);}}
                >
                    <View style={styles.centeredView} opacity={0.9} >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Report's Name</Text>
                        <TextInput
                            style={styles.modelInput}
                            onChangeText={(value) => setItemValue(value,19)}
                            placeholder="Name ..."
                        />
                        <View style={styles.modalButtons}>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>close</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => {setModalVisible(!modalVisible);uploadData();}}
                            >
                            <Text style={styles.textStyle}>OK</Text>
                            </Pressable>
                        </View>
                    </View>
                    </View>
                </Modal>
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
                    <View style={styles.commentsContainer}>
                        <TextInput
                            style={{alignSelf:'center'}}
                            onChangeText={(value) => setItemValue(value,18)}
                            placeholder="Comments"
                
                        />
                    </View>
                        <View style={styles.buttomContainer}>
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
                                onPress={   ()=>  navigation.navigate('PatientHome')   }

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
                                onPress={() => { setModalVisible(true); }}

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
    buttomContainer: {
        flex:1,
        backgroundColor:'#fff',
        flexDirection: 'row',
        alignSelf:'center',
        paddingBottom:20,
      },
    commentsContainer:{
        backgroundColor: '#8BC0E0'

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
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
          },
          modalView: {
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
          modalButtons:{
            flexDirection:'row',
          },
          button: {
            borderRadius: 20,
            width: 60,
            padding: 10,
            elevation: 2,
            margin:10,
            marginBottom: 0,
          },
          buttonOpen: {
            backgroundColor: 'green',
          },
          buttonClose: {
            backgroundColor: 'red',
          },
          textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center"
          },
          modelInput:{
              borderColor:'#55A8D9',
              borderWidth:1,
              padding:10,
              width:130,
              borderRadius:10,
              marginBottom:10
          }
  });

export default ReportTextInput;