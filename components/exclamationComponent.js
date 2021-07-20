
import {View,StatusBar,StyleSheet,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import {Button,Icon,Tooltip,Text,Divider  } from 'react-native-elements';
import React,{useState}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {DrawerActions } from '@react-navigation/native';
import Hyperlink from 'react-native-hyperlink';

const HGBexclamation = () =>{
    return(
        <View>
            <View style={{marginBottom:50}}>
    <Hyperlink
    linkDefault
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    linkText={ (url) => url === 'https://reactnativeforyou.com' ? 'dola' : url === 'https://www.healthline.com/health/hgb#causesof-high-hgb.com' ? 'ofa7' : url    
      }
     >
     <Text >
      Welcome to https://reactnativeforyou.com blog. Here you get all react native tutorials https://www.healthline.com/health/hgb#causesof-high-hgb.com !
     </Text>
     </Hyperlink>
      </View>
            <Text h1>What is the Hgb test?</Text>

                The hemoglobin (Hgb) test measures how much hemoglobin your red blood cells contain.

                Hgb is a protein produced by your bone marrow that’s stored in red blood cells. It helps red blood cells transport oxygen from your lungs to your body through your arteries.

                It also transports carbon dioxide (CO2) from around your body back to your lungs through your veins. Hgb is what makes red blood cells look red.

                Abnormally high or low Hgb can cause symptoms like exhaustion, dizziness, or shortness of breath. Your doctor may suggest an Hgb test if you’re experiencing these symptoms. You may have an underlying condition that needs to be diagnosed.

                Learn why you may need an Hgb test, what the typical ranges are for Hgb, and what can cause abnormal Hgb levels.

                Why do I need the Hgb test?
                The Hgb test uses a sample of your blood to determine hemoglobin levels.

                To take a sample, your healthcare provider extracts blood from a vein by pricking your finger or inserting a needle with an attached tube into the crease of your arm. The sample is then stored in the tube to be analyzed later at a lab.

                The needle may cause brief discomfort, but the insertion usually lasts less than a minute. If you’re sensitive to getting blood drawn or the sight of blood, have someone come with you and let your provider know.

                The Hgb test may be ordered as part of a complete blood count (CBC) test. A CBC test also measures other important components of your blood, such as white blood cells and platelets. Abnormal levels of any of these cells can indicate underlying conditions or blood disorders.

                Here are a few other reasons your doctor may order an Hgb test:

                You have parents or other family members who have blood disorders, such as sickle cell anemia.
                You have an infection.
                You don’t have enough iron in your diet.
                You’ve lost a lot of blood after surgery or a traumatic injury.
                You’re pregnant.
                You have a medical condition that can affect your Hgb levels.
                You don’t need to fast for the Hgb test specifically. You may need to fast — avoiding food or liquids with calories for about 12 hours — if your doctor plans to test the chemistry of your blood at the same time. You should drink plenty of water, however.

                What are the ranges for the test results?
                Your age and gender both affect your Hgb levels. Typical healthy Hgb levels are as follows:

                What are the symptoms of low hemoglobin?
                Low Hgb is also known as anemia, which means that you don’t have enough red blood cells in your body.

                With anemia, a blood test will also show that you have a low red blood cell count and may have low hematocrit, the volume of red blood cells to other components in your blood.

                Anemia can have many causes, so symptoms vary widely. Common anemia symptoms can include:

                exhaustion
                skin paleness
                shortness of breath
                abnormal or rapid heartbeat
                pain in your chest
                cold, swollen hands or feet
                headache
                trouble with physical activity
                While exhaustion or fatigue isn’t a cause of low hemoglobin, it can be a symptom. A lower than normal amount of hemoglobin can result in decreased oxygen delivery to vital organs and muscles, resulting in fatigue or a lack of energy.

                What are the causes of low hemoglobin?
                Low Hgb levels can be caused by any condition that affects your body’s ability to create red blood cells or conditions that lower red blood cells in your bloodstream.

                Possible causes of low Hgb include:

                lack of iron in your diet, which makes it harder for your bone marrow to produce Hgb
                lack of folate or vitamin B-12, which can lead to your body producing fewer red blood cells than are needed
                severe blood loss after surgery or a major injury
                internal bleeding from stomach ulcers, stomach or colon cancer, or internal injuries
                sickle cell anemia, a genetic condition that causes red blood cells to be abnormally sickle-shaped and able to carry less Hgb
                hypothyroidism, which means that the thyroid gland doesn’t produce enough thyroid hormones
                splenomegaly, or an enlarged spleen from infection, liver conditions, or cancer
                bone marrow conditions, such as leukemia, that prevent your bone marrow from producing enough red blood cells
                chronic kidney disease, in which your kidneys don’t function properly (resulting in a deficiency of erythropoietin, a hormone that stimulates red blood cell production in your bone marrow)
                Other causes can include:

                donating blood too often
                heavy bleeding during your period
                alcohol misuse
                chronic health problems such as autoimmune diseases or cancer
                What are the symptoms of high hemoglobin?
                High Hgb is known as polycythemia. This means you have too many red blood cells.

                Polycythemia vera is a cancer of the blood in which your bone marrow overproduces red blood cells.

                With polycythemia, a blood test also shows that you have a high red blood cell count and high hematocrit.

                Common symptoms of high Hgb levels include:

                itchiness
                headache
                dizziness
                getting easily bruised or bleeding
                sweating more than usual
                painful joint swelling
                abnormal weight loss
                a yellow tint to the eyes and skin (jaundice)
                feeling exhausted
                a purple or reddish tint to the skin
                What are the causes of high hemoglobin?
                High Hgb may result from your body needing to store more Hgb in red blood cells due to your environment, a condition that affects your heart or lung function, or lifestyle choices.

                Possible causes of high Hgb levels include:

                living at high altitudes where there’s not as much oxygen in the air, such as in the mountains
                smoking tobacco products, including cigarettes or cigars
                chronic obstructive pulmonary disease (COPD), a condition that inflames the lungs and blocks air from getting into your lungs
                heart or lung diseases that affect your ability to breathe, your lungs’ ability to pass oxygen into your bloodstream, or your heart’s ability to pump normally
                taking erythropoietin unnecessarily, such as to enhance high-level physical performance
                Other causes include:

                being severely dehydrated
                heart failure
                cancer of the liver or kidneys
                The takeaway
                Your doctor may recommend a Hgb test if you have symptoms of abnormal Hgb levels or if you’re pregnant.

                The earlier you notice the symptoms of abnormal Hgb levels and have the cause diagnosed, the more likely you are to have successful treatment.

                See your doctor if you’re experiencing any symptoms of high or low Hgb. If you have a family history of blood disorders or conditions that can affect bone marrow or red blood cell production, you’ll likely need regular Hgb tests along with a CBC to monitor how these health problems may be affecting your blood cells.

        </View>
    );
}
const RBCexclamation = () =>{
    return(
        <View>
        <ScrollView>   
            <Text>
            A red blood cell (RBC) count is a blood test that tells you how many red blood cells you have.

            Red blood cells contain a substance called haemoglobin, which transports oxygen around the body.

            The amount of oxygen that's delivered to your body's tissues depends on the number of red blood cells you have and how well they work.

            A RBC count is usually carried out as part of a full blood cell (FBC) count.

            Women usually have a lower RBC count than men, and the level of red blood cells tends to decrease with age.

            A normal RBC count would be:

            men – 4.7 to 6.1 million cells per microlitre (cells/mcL)
            women – 4.2 to 5.4 million cells/mcL
            The results of an RBC count can be used to help diagnose blood-related conditions, such as iron deficiency anaemia (where there are less red blood cells than normal).

            A low RBC count could also indicate a vitamin B6, B12 or folate deficiency.

            It may also signify internal bleeding, kidney disease or malnutrition (where a person's diet doesn't contain enough nutrients to meet their body's needs).

            A high RBC count could be caused by a number of health conditions or health-related factors, including:

            smoking
            congenital heart disease
            dehydration (for example, from severe diarrhoea)
            low blood oxygen levels (hypoxia)
            pulmonary fibrosis (a lung condition that causes scarring of the lungs)
            Read more about the red blood cell count at Lab Tests Online UK.
            </Text>
        </ScrollView> 
        </View>
    )
}

function Exclamation (props){

    const userName = useSelector(state => state.user.firstname)
    return(
        <View style={{flex: 1, backgroundColor:'#55A8D9'}}>
                <StatusBar backgroundColor='#55A8D9'/>
                <View style={styles.WelcomBar}>
                    <Icon name="menu" size={30} color= 'white' onPress={ () => props.navigation.dispatch(DrawerActions.toggleDrawer()) }/>
                    <Text style={styles.WelcomBarText}>
                        welcome {userName}
                    </Text>
                </View>
        <ScrollView style={{ backgroundColor:'#fff'}}> 
            <Hyperlink
            linkDefault
            linkStyle={ { color: '#2980b9', fontSize: 15 } }
            linkText={ (url) => url === 'https://www.healthline.com/health/serum-hemoglobin.com' ? 'hemoglobin (Hgb) test' : url === 'https://www.healthline.com/health/hgb#causesof-high-hgb.com' ? 'ofa7' : url    
            }
            >     
            <Text h3 style={{margin:10}}>What is the Hgb test?</Text>
            <Divider
                orientation="horizontal"
                />
            <View style={{fontSize: 18,paddingLeft:10,paddingRight:10,marginTop:20}}>
            <Text>
                <Text>
                The https://www.healthline.com/health/serum-hemoglobin.com measures how much hemoglobin your red blood cells contain.{"\n"}{"\n"}

                Hgb is a protein produced by your bone marrow that’s stored in red blood cells. It helps red blood cells transport oxygen 
                    from your lungs to your body through your arteries.{"\n"}{"\n"}

                It also transports carbon dioxide (CO2) from around your body back to your lungs through your veins.
                 Hgb is what makes red blood cells look red.{"\n"}{"\n"}

                Abnormally high or low Hgb can cause symptoms like exhaustion,
                 dizziness, or shortness of breath. Your doctor may suggest an Hgb test if you’re experiencing these symptoms.
                  You may have an underlying condition that needs to be diagnosed.{"\n"}{"\n"}
                Learn why you may need an Hgb test, what the typical ranges are for Hgb,
                 and what can cause abnormal Hgb levels.{"\n"}{"\n"}

                 </Text>
                <Text h4> Why do I need the Hgb test?</Text>{"\n"}{"\n"}
                <Text>
                The Hgb test uses a sample of your blood to determine hemoglobin levels.{"\n"}{"\n"}

                To take a sample, your healthcare provider extracts blood from a vein by pricking
                 your finger or inserting a needle with an attached tube into the crease of your arm.
                  The sample is then stored in the tube to be analyzed later at a lab.{"\n"}{"\n"}

                The needle may cause brief discomfort, but the insertion usually lasts less than a minute.
                 If you’re sensitive to getting blood drawn or the sight of blood, have someone come with
                  you and let your provider know.{"\n"}{"\n"}

                The Hgb test may be ordered as part of a complete blood count (CBC) test.
                 A CBC test also measures other important components of your blood,
                  such as white blood cells and platelets. Abnormal levels of any of these cells can
                   indicate underlying conditions or blood disorders.{"\n"}{"\n"}
                   </Text>
                <Text>
                Here are a few other reasons your doctor may order an Hgb test:{"\n"}{"\n"}

                    <Icon name="circle" type='font-awesome' 
                    size={8} color= 'red'/>  You have parents or other family members who have blood disorders, such as sickle cell anemia.{"\n"}
                    <Icon   name="circle" type='font-awesome' 
                    size={8} color= 'red'/>   You have an infection.{"\n"}
                    <Icon   name="circle" type='font-awesome' 
                    size={8} color= 'red'/>   You don’t have enough iron in your diet.{"\n"}
                    <Icon   name="circle" type='font-awesome' 
                    size={8} color= 'red'/>   You’ve lost a lot of blood after surgery or a traumatic injury.{"\n"}
                    <Icon   name="circle" type='font-awesome' 
                    size={8} color= 'red'/>   You’re pregnant.{"\n"}
                    <Icon   name="circle" type='font-awesome' 
                    size={8} color= 'red'/>   You have a medical condition that can affect your Hgb levels.{"\n"}{"\n"}
                
                You don’t need to fast for the Hgb test specifically. You may need to fast — avoiding food or liquids with calories for
                 about 12 hours — if your doctor plans to test the chemistry of your blood at the same time.
                  You should drink plenty of water, however.{"\n"}{"\n"}
                </Text>

                <Text h4> What are the ranges for the test results?</Text>{"\n"}{"\n"}
                <Text>
                Your age and gender both affect your Hgb levels. Typical healthy Hgb levels are as follows:{"\n"}{"\n"}{"\n"}
                </Text>
                <Text h4> What are the symptoms of low hemoglobin?</Text>{"\n"}{"\n"}
                <Text>
                Low Hgb is also known as anemia, which means that you don’t have enough red blood cells in your body.{"\n"}{"\n"}

                With anemia, a blood test will also show that you have a low red blood cell count and may have low hematocrit,
                 the volume of red blood cells to other components in your blood.{"\n"}{"\n"}
                 </Text>
                 <Text>
                Anemia can have many causes, so symptoms vary widely. Common anemia symptoms can include:{"\n"}{"\n"}

                exhaustion{"\n"}
                skin paleness{"\n"}
                shortness of breath{"\n"}
                abnormal or rapid heartbeat{"\n"}
                pain in your chest{"\n"}
                cold, swollen hands or feet{"\n"}
                headache{"\n"}
                trouble with physical activity{"\n"}{"\n"}
                While exhaustion or fatigue isn’t a cause of low hemoglobin, it can be a symptom. A lower than normal 
                    amount of hemoglobin can result in decreased oxygen delivery to vital organs and muscles, resulting 
                    in fatigue or a lack of energy.{"\n"}{"\n"}
                    </Text>
                <Text h4> What are the causes of low hemoglobin?</Text>{"\n"}{"\n"}
                Low Hgb levels can be caused by any condition that affects your body’s
                <Text>
                 ability to create red blood cells or conditions that lower red blood cells in your bloodstream.{"\n"}{"\n"}

                Possible causes of low Hgb include:{"\n"}{"\n"}

                lack of iron in your diet, which makes it harder for your bone marrow to produce Hgb{"\n"}
                lack of folate or vitamin B-12, which can lead to your body producing fewer red blood cells
                 than are needed{"\n"}
                severe blood loss after surgery or a major injury{"\n"}
                internal bleeding from stomach ulcers, stomach or colon cancer, or internal injuries{"\n"}
                sickle cell anemia, a genetic condition that causes red blood cells to be abnormally sickle-shaped
                 and able to carry less Hgb{"\n"}
                hypothyroidism, which means that the thyroid gland doesn’t produce enough thyroid hormones{"\n"}
                splenomegaly, or an enlarged spleen from infection, liver conditions, or cancer{"\n"}
                bone marrow conditions, such as leukemia, that prevent your bone marrow from producing
                 enough red blood cells{"\n"}
                chronic kidney disease, in which your kidneys don’t function properly
                 (resulting in a deficiency of erythropoietin, a hormone that stimulates
                  red blood cell production in your bone marrow){"\n"}{"\n"}

                Other causes can include:{"\n"}

                donating blood too often{"\n"}
                heavy bleeding during your period{"\n"}
                alcohol misuse{"\n"}
                chronic health problems such as autoimmune diseases or cancer{"\n"}{"\n"}

                </Text>
                <Text h4> What are the symptoms of high hemoglobin?</Text>{"\n"}{"\n"}
                <Text>
                High Hgb is known as polycythemia. This means you have too many red blood cells.{"\n"}

                Polycythemia vera is a cancer of the blood in which your bone marrow overproduces red blood cells.{"\n"}

                With polycythemia, a blood test also shows that you have a high red blood cell count and high hematocrit.{"\n"}{"\n"}

                Common symptoms of high Hgb levels include:{"\n"}{"\n"}

                itchiness{"\n"}
                headache{"\n"}
                dizziness{"\n"}
                getting easily bruised or bleeding{"\n"}
                sweating more than usual{"\n"}
                painful joint swelling{"\n"}
                abnormal weight loss{"\n"}
                a yellow tint to the eyes and skin (jaundice){"\n"}
                feeling exhausted{"\n"}
                a purple or reddish tint to the skin{"\n"}{"\n"}
                </Text>
                <Text h4> What are the causes of high hemoglobin?</Text>{"\n"}{"\n"}
                <Text>
                High Hgb may result from your body needing to store more Hgb in red blood cells
                 due to your environment, a condition that affects your heart or lung function, or lifestyle choices.{"\n"}{"\n"}

                Possible causes of high Hgb levels include:{"\n"}{"\n"}

                living at high altitudes where there’s not as much oxygen in the air, such as in the mountains{"\n"}
                smoking tobacco products, including cigarettes or cigars{"\n"}
                chronic obstructive pulmonary disease (COPD), a condition that 
                inflames the lungs and blocks air from getting into your lungs{"\n"}
                heart or lung diseases that affect your ability to breathe, your lungs’ ability to pass oxygen into your bloodstream,
                 or your heart’s ability to pump normally{"\n"}
                taking erythropoietin unnecessarily, such as to enhance high-level physical performance{"\n"}{"\n"}

                Other causes include:{"\n"}

                being severely dehydrated{"\n"}
                heart failure{"\n"}
                cancer of the liver or kidneys{"\n"}{"\n"}
                </Text>

                <Text h4> The takeaway</Text> {"\n"}{"\n"}
                <Text>
                Your doctor may recommend a Hgb test if you have symptoms of abnormal Hgb levels or if you’re 
                pregnant.{"\n"}{"\n"}

                The earlier you notice the symptoms of abnormal Hgb levels and have the cause diagnosed,
                 the more likely you are to have successful treatment.{"\n"}{"\n"}

                See your doctor if you’re experiencing any symptoms of high or low Hgb. If you have a family 
                history of blood disorders or conditions that can affect bone marrow or red blood cell 
                production, you’ll likely need regular Hgb tests along with a CBC to monitor how these 
                health problems may be affecting your blood cells.{"\n"}{"\n"}
                </Text>
                </Text>
                </View>
                </Hyperlink>
        </ScrollView> 
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
    container: { flex: 1, padding:0, paddingTop: 0, backgroundColor: '#8BC0E0' },
    head: { height: 40, backgroundColor: '#FFFFFF' },
    text: { margin: 6 },
    row1: { flexDirection: 'row', backgroundColor: '#8BC0E0' },
    row2: { flexDirection: 'row', backgroundColor: '#A3CBE3' },
    commentStyle:{flexDirection: 'row', backgroundColor: '#A3CBE3'},
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


export default Exclamation;
