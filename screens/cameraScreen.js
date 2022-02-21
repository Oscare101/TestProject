import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Camera } from 'expo-camera'

export default function CameraScreen() {
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
