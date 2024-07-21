import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useCameraPermission,
} from 'react-native-vision-camera';

const VisionCameraComponent = () => {
  const device = useCameraDevices('back');
  const {hasPermission, requestPermission} = useCameraPermission();
  const cameraRef = useRef(null);
  //   const [hasPermission, setHasPermission] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestPermission();
  }, []);

  if (device == null) {
    return <NoCameraDeviceError />;
  }

  if (!hasPermission) {
    return <PermissionsPage />;
  }

  const takePhoto = async () => {
    if (cameraRef.current == null) return;
    try {
      const photo = await cameraRef.current.takePhoto();
      ToastAndroid.show('Photo taken!', ToastAndroid.SHORT);
      // Handle the photo as needed
    } catch (error) {
      console.error('Failed to take photo:', error);
      ToastAndroid.show('Failed to take photo', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        ref={cameraRef}
      />
      <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
        <Text style={styles.cameraBtnText}>📸</Text>
      </TouchableOpacity>
    </View>
  );
};

const NoCameraDeviceError = () => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>No camera device available.</Text>
  </View>
);

const PermissionsPage = () => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>Camera permissions are required.</Text>
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  cameraBtn: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
  },
  cameraBtnText: {
    fontSize: 30,
  },
});

export default VisionCameraComponent;
