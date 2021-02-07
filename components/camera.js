// import React, { useRef, useState, useEffect } from "react"
// import { View, StyleSheet, Text, TouchableOpacity, Image, Platform } from "react-native"
// import Permissions from 'react-native-permissions';
// // import DocumentScanner from "@woonivers/react-native-document-scanner"
// import { useSelector,useDispatch } from 'react-redux';
// import photoUpload from '../redux/images';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// export default function Camera() {
//   const pdfScannerElement = useRef(null)
//   const [data, setData] = useState({})
//   const [allowed, setAllowed] = useState(true)
//   const dispatch = useDispatch();
//   // useEffect(() => {
//   //   async function requestCamera() {
//   //     const result = await Permissions.request(Platform.OS === "android" ? "android.permission.CAMERA" : "ios.permission.CAMERA")
//   //     if (result === "granted") setAllowed(true)
//   //   }
//   //   requestCamera()
//   // }, [])

//   function handleOnPressRetry() {
//     setData({})
//   }
//   function photoProcessing({croppedImage, initialImage}){
//     console.log("croppedImage : ", croppedImage);
    
//   }
//   function handleOnPress() {
//     pdfScannerElement.current.capture()
//   }
//   if (!allowed) {
//     console.log("You must accept camera permission")
//     return (<View style={styles.permissions}>
//       <Text>You must accept camera permission</Text>
//     </View>)
//   }
//   if (data.croppedImage) {
//     console.log("data", data)
//     return (
//       <React.Fragment>
//         <Image source={{ uri: data.croppedImage }} style={styles.preview} />
//         <TouchableOpacity onPress={handleOnPressRetry} style={styles.button}>
//           <Text style={styles.buttonText}>Retry</Text>
//         </TouchableOpacity>
//       </React.Fragment>
//     )
//   }
//   return (
//     <View style={{flex:1}}>
//       <DocumentScanner
//       ref={pdfScannerElement}
//         style={styles.scanner}
//         onPictureTaken={photoProcessing}
//         overlayColor="rgba(255,130,0, 0.7)"
//         enableTorch={false}
//         quality={0.5}
//         detectionCountBeforeCapture={5}
//         detectionRefreshRateInMS={50}
//       />
//       <TouchableOpacity onPress={handleOnPress} style={styles.button}>
//         <Text style={styles.buttonText}>Take picture</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   scanner: {
//     flex: 1,
//     aspectRatio: undefined
//   },
//   button: {
//     alignSelf: "center",
//     position: "absolute",
//     bottom: 32,
//   },
//   buttonText: {
//     backgroundColor: "rgba(245, 252, 255, 0.7)",
//     fontSize: 32,
//   },
//   preview: {
//     flex: 1,
//     width: "100%",
//     resizeMode: "cover",
//   },
//   permissions: {
//     flex:1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// })




