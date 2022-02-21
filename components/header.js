import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.black} />
      <View style={styles.circle}>
        <Text style={styles.circleText}>SMS</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 110,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  black: {
    backgroundColor: '#000',
    width: '100%',
    height: 65,
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  circleText: {
    color: '#fff',
    fontSize: 28,
  },
})
