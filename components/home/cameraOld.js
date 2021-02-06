// import { PropTypes } from 'prop-types';
// import React, { PureComponent,Component, useRef,useState  } from 'react';
// import { ActivityIndicator,Image, Animated, Dimensions, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import Scanner, { Filters, RectangleOverlay } from 'react-native-rectangle-scanner';
// // import ScannerFilters from './Filters';


// export default function Camera() {
//   const camera = useRef(null)
//   const [camerTaken,setCamerTaken] = useState('')
//   const [detectedRectangle,setDetectedRectangle] = useState(false)
//   const [processingImage,setProcessingImage] = useState(false);
//   const overlayFlashOpacity =  new Animated.Value(0)
//   const device = {
//     initialized: false,
//     hasCamera: false,
//     permissionToUseCamera: false,
//     flashIsAvailable: false,
//     previewHeightPercent: 1,
//     previewWidthPercent: 1,
//   }
//   handleOnPictureProcessed = ({croppedImage, initialImage}) => {
//     setProcessingImage(false);
//     console.log(croppedImage)
//     setCamerTaken(croppedImage);
//   }
//   triggerSnapAnimation = () => {
//     Animated.sequence([
//       Animated.timing(overlayFlashOpacity, { toValue: 0.2, duration: 100,useNativeDriver:true }),
//       Animated.timing(overlayFlashOpacity, { toValue: 0, duration: 50,useNativeDriver:true }),
//       Animated.timing(overlayFlashOpacity, { toValue: 0.6, delay: 100, duration: 120,useNativeDriver:true }),
//       Animated.timing(overlayFlashOpacity, { toValue: 0, duration: 90,useNativeDriver:true }),
//     ]).start();
//   }
//   onCapture = () => {
//     setProcessingImage(true);
//     camera.current.capture();
//     triggerSnapAnimation();
//   }
//   restart = () => {
//     setCamerTaken('')
//   }

//   // Renders the camera controls or a loading/processing state
//   const renderCameraOverlay = () => {
//     let loadingState = null;
//     if (processingImage) {
//       loadingState = (
//         <View style={styles.overlay}>
//           <View style={styles.loadingContainer}>
//             <View style={styles.processingContainer}>
//               <ActivityIndicator color="#333333" size="large" />
//               <Text style={{ color: '#333333', fontSize: 30, marginTop: 10 }}>Processing</Text>
//             </View>
//           </View>
//         </View>
//       );
//     }

//     return (
//       <>
//         {loadingState}
//       </>
//     );
//   }
//   getPreviewSize = () => {
//     const dimensions = Dimensions.get('window');
//     // We use set margin amounts because for some reasons the percentage values don't align the camera preview in the center correctly.
//     const heightMargin = (1 - device.previewHeightPercent) * dimensions.height / 2;
//     const widthMargin = (1 - device.previewWidthPercent) * dimensions.width / 2;
//     if (dimensions.height > dimensions.width) {
//       // Portrait
//       return {
//         height: device.previewHeightPercent,
//         width: device.previewWidthPercent,
//         marginTop: heightMargin,
//         marginLeft: widthMargin,
//       };
//     }

//     // Landscape
//     return {
//       width: device.previewHeightPercent,
//       height: device.previewWidthPercent,
//       marginTop: widthMargin,
//       marginLeft: heightMargin,
//     };
//   }
//   const previewSize = getPreviewSize();
  
//     const onDeviceSetup = (deviceDetails) => {
//       const {
//         hasCamera, permissionToUseCamera, flashIsAvailable, previewHeightPercent, previewWidthPercent,
//       } = deviceDetails;

//           device.initialized= true
//           device.hasCamera =hasCamera
//           device.permissionToUseCamera =permissionToUseCamera
//           device.flashIsAvailable =flashIsAvailable
//           device.previewHeightPercent= previewHeightPercent || 1
//           device.previewWidthPercent= previewWidthPercent || 1

//     }
//   if(camerTaken){
//     return(
//       <React.Fragment>
//         <Image source={{ uri: camerTaken }} style={{flex:1}} />
//         <TouchableOpacity onPress={()=>restart()}>
//               <Text>restart</Text>
//         </TouchableOpacity>
//         </React.Fragment>

//     );
//   }
//   else{
//     let rectangleOverlay = null;
//     if(!processingImage){
//       rectangleOverlay = (
//         <RectangleOverlay
//           detectedRectangle={detectedRectangle}
//           previewRatio={previewSize}
//           backgroundColor="rgba(255,181,6, 0.2)"
//           borderColor="rgb(255,181,6)"
//           borderWidth={4}
//         />
//       );
//     }
//     return (
//       <>
//       <Scanner
//           onPictureProcessed={handleOnPictureProcessed}
//           ref={camera}
//           style={styles.scanner}
//           onDeviceSetup={onDeviceSetup}
//           onRectangleDetected={({ detectedRectangle }) =>setDetectedRectangle(detectedRectangle)}
//         />
//         {rectangleOverlay}
//         {renderCameraOverlay}
//         <TouchableOpacity onPress={()=>onCapture()} style={{marginBottom:30}}>
//           <Text>take image</Text>
//         </TouchableOpacity>
//       </>
//     );

//   }
// };





// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     height: 70,
//     justifyContent: 'center',
//     width: 65,
//   },
//   buttonActionGroup: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   buttonBottomContainer: {
//     alignItems: 'flex-end',
//     bottom: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     left: 25,
//     position: 'absolute',
//     right: 25,
//   },
//   buttonContainer: {
//     alignItems: 'flex-end',
//     bottom: 25,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     position: 'absolute',
//     right: 25,
//     top: 25,
//   },
//   buttonGroup: {
//     backgroundColor: '#00000080',
//     borderRadius: 17,
//   },
//   buttonIcon: {
//     color: 'white',
//     fontSize: 22,
//     marginBottom: 3,
//     textAlign: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 13,
//   },
//   buttonTopContainer: {
//     alignItems: 'flex-start',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     left: 25,
//     position: 'absolute',
//     right: 25,
//     top: 40,
//   },
//   cameraButton: {
//     backgroundColor: 'white',
//     borderRadius: 50,
//     flex: 1,
//     margin: 3,
//   },
//   cameraNotAvailableContainer: {
//     alignItems: 'center',
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 15,
//   },
//   cameraNotAvailableText: {
//     color: 'white',
//     fontSize: 25,
//     textAlign: 'center',
//   },
//   cameraOutline: {
//     borderColor: 'white',
//     borderRadius: 50,
//     borderWidth: 3,
//     height: 70,
//     width: 70,
//   },
//   container: {
//     backgroundColor: 'black',
//     flex: 1,
//   },
//   flashControl: {
//     alignItems: 'center',
//     borderRadius: 30,
//     height: 50,
//     justifyContent: 'center',
//     margin: 8,
//     paddingTop: 7,
//     width: 50,
//   },
//   loadingCameraMessage: {
//     color: 'white',
//     fontSize: 18,
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   loadingContainer: {
//     alignItems: 'center', flex: 1, justifyContent: 'center',
//   },
//   overlay: {
//     bottom: 0,
//     flex: 1,
//     left: 0,
//     position: 'absolute',
//     right: 0,
//     top: 0,
//   },
//   processingContainer: {
//     alignItems: 'center',
//     backgroundColor: 'rgba(220, 220, 220, 0.7)',
//     borderRadius: 16,
//     height: 140,
//     justifyContent: 'center',
//     width: 200,
//   },
//   scanner: {
//     flex: 1,
//   },
// });
