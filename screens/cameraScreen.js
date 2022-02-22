import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
      console.log(Camera.requestCameraPermissionsAsync())
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={styles.screen}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back}>
        <View style={styles.scan} />
        {/* <TouchableOpacity style={styles.button}></TouchableOpacity> */}
      </Camera>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scan: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    height: 100,
    borderRadius: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 50,
  },
})
