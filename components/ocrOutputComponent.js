import {View, Text,StatusBar,StyleSheet,Modal,TextInput,TouchableOpacity,ScrollView,Pressable } from 'react-native';
import {Button,Icon} from 'react-native-elements';
import React,{useState}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {DrawerActions } from '@react-navigation/native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Loading } from './watingComponent';
import {postReports} from '../redux/reports';
import {CHANGE_MEASURE} from '../redux/images';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';



// var dataInserted = {}
function ReportTextOutput ({navigation}){

    const user = useSelector(state => state.user)
    var patientId = user.id;
    const image = useSelector(state => state.image)
    const dispatch = useDispatch()
    
    var [name, setName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);
    const [date, SetDate] = useState( new Date());
    const itemsNumber = ["Male","Female"]
    const [gender , setGender] = useState('');
    const [age , setAge] = useState('');
    const pickerItems = itemsNumber.map((value,index) => 
    <Picker.Item label={value.toString()} value={value.toString()} key={index.toString()+1} />   ) 


    var tableHead = ['Measure', 'Value','Ranges','Units'];
    var tableData = [
        ['RBC', 0,'4.7 : 6', '10^6/ul' ],
        ['HGB', 0,'13.5 : 18', 'g/dl' ],
        ['НСТ', 0,'37 : 47', '%' ],
        ['MCV', 0,'78 : 99', 'Um^3' ],
        ['MCH', 0,'27 : 31 ', 'pg' ],
        ['MCHC', 0,'32 : 36', 'g/dl' ],
        ['RDW', 0,'11.5 : 14.5', '%' ],
        ['WBC', 0,'4 : 10.5', '10^3/ul' ],
        ['LYM', 0,'1.2 : 3.2', '%' ],
        ['LYMP', 0,'20 : 45', '10^3/ul' ],
        ['MON', 0,'0.3 : 0.8', '%' ],
        ['MONP', 0,'1 : 8', '10^3/ul' ],
        ['GRA', 0,'1.6 : 7.2', '%' ],
        ['GRAP', 0,'52 : 76', '10^3/ul' ],
        ['PLT', 0,'140 : 440', '10^3/ul' ],
        ['MPV', 0,'7.4 : 10.4', 'Um^3' ],
        ['PCT', 0,'0.1 : 0.5', '%' ],
        ['PDW', 0,'9 : 14', '%' ]
    ]
    
    

    const element = (Measurement,index) => (
        <TextInput
        style={{alignSelf:'center'}}
        onChangeText={(value) => dispatch(CHANGE_MEASURE({value,Measurement}))}
        placeholder={image.report.measurments[Measurement]}
        keyboardType="numeric"
      />
      )
    // const setItemValue = (value,Measurement) => {
    //     dataInserted[Measurement] = value;
    //     console.log('data',dataInserted)
    // }
    const sendData = (patientId)=>{
        // var newReport = {...dataInserted}
        // dataInserted.forEach((item) => {
        //     newReport[item[0]]=item[1];
        // })
        // dataInserted["MCHC"] =dataInserted['MCHC'];
        var dataInserted = {...image.report.measurments};
        dataInserted["patientId"] = patientId;
        dataInserted["comment"] = comment;
        dataInserted["name"] = name;
        dataInserted["appDate"] = new Date().toISOString();
        dataInserted["reportDate"] = date;
        dataInserted["gender"] = gender;
        dataInserted["age"] = age;
        console.log('repot post',dataInserted);
        dispatch(postReports(dataInserted));
        navigation.navigate('PatientHome');
    }
    const [comment, setComment] = useState(image.report.comment);
    // const [dataInserted,setDataInserted] = useState(image.report.measurments);
    if(image.status == 'succeeded Upload'){
        
        // console.log("dataInserted",dataInserted);
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
                            onChangeText={(text)=> setName(text)}
                            placeholder="Name ..."
                        />
                        <TouchableOpacity
                        style={styles.DateTimePickerButton}
                        onPress={()=>setShowDateTimePicker(true)}
                            >
                        <Text style={{fontSize:17}}>Report Date : {date.toLocaleDateString()}</Text>
                        </TouchableOpacity>
                        {showDateTimePicker && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode='date'
                                is24Hour={false}
                                display="spinner"
                                onChange={(event, selectedDate) =>{SetDate(selectedDate || date);setShowDateTimePicker(false)}}
                                />
                        )}
                        
                        <View style={styles.pickerContianer}>
                            <Text style={{fontSize:18}}>Gender</Text>
                            <Picker
                                selectedValue={gender}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) =>
                                    setGender(itemValue)
                                }>
                                <Picker.Item label='***' value='0' key='0' />
                                {pickerItems}
                            </Picker>
                        </View>
                        <TextInput
                            style={styles.modelInput}
                            onChangeText={(value) => setAge(value)}
                            placeholder="Age ..."
                            keyboardType="numeric"
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
                            onPress={() => {setModalVisible(!modalVisible);sendData(patientId);}}
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
                                        <Cell  key={cellIndex} data={cellIndex === 1 ? element(rowData[0],index) : cellData} textStyle={styles.text}/>
                                    ))
                                    }
                                </TableWrapper>
                                ))
                            }
                        </Table>
                        <View style={styles.commentStyle}>
                            <Text> comment</Text>
                            <View >
                                <TextInput
                                style={{alignContent:'center',borderColor:'white',borderWidth:1,marginBottom:5,marginRight:20}}
                                onChangeText={text => setComment(text)}
                                value={image.report.comment}
                                // placeholder={}
                                />
                            </View>
                        </View>
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
                                onPress={   ()=>   { setModalVisible(true);  }}

                                />
                        </View>
                    </ScrollView>
                </View>
                
            </View>
            
        );
    }else if(image.errMess){
        return(
            <View>
                <Text>{image.errMess}</Text>
            </View>
        );
    }else {
        return(
            <Loading />
        );
    }
    
    
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
    container: { flex: 1, padding:0, paddingTop: 0, backgroundColor: '#8BC0E0' },
    head: { height: 40, backgroundColor: '#FFFFFF' },
    text: { margin: 6 },
    row1: { flexDirection: 'row', backgroundColor: '#8BC0E0' },
    row2: { flexDirection: 'row', backgroundColor: '#A3CBE3' },
    commentStyle:{flexDirection:'column',backgroundColor: '#A3CBE3',padding:10},
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
          },
          DateTimePickerButton:{
            alignItems: "center",
            borderColor:'#55A8D9',
            borderWidth:1,
            borderRadius:20,
            marginBottom:10,
            padding:10,
            fontSize:18,
            borderRadius: 20,
            
        },
          pickerContianer:{
            flexDirection:'row',
            alignItems: "center",
            borderWidth:1,
            borderRadius:20,
            borderColor:'#55A8D9',
            marginBottom:15,
            marginLeft:5,
            paddingLeft:10,
        },
        picker:{
            paddingLeft:140,
            marginLeft:30,
        },
  });

export default ReportTextOutput;