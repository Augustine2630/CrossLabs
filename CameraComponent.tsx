import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import {
  Camera,
  useCameraDevices,
  CameraPermissionStatus,
  useCameraPermission,
  useCameraDevice,
} from 'react-native-vision-camera';
import {useIsFocused} from '@react-navigation/native';

const CameraComponent = () => {
  const {hasPermission} = useCameraPermission();
  const isFocused = useIsFocused();
  const device = useCameraDevice('back');

  useEffect(() => {
    if (isFocused) {
      Camera.requestCameraPermission().then(a => {
        if (!hasPermission) {
          console.log(a);
          return <View />;
        }
      });
    }
  }, [hasPermission, isFocused]);

  if (device == null) {
    return null;
  }
  if (hasPermission === null) {
    return <Text>No camera found</Text>;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CameraComponent;
