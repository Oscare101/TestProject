import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/header'

export default function InfoScreen() {
  return (
    <View style={styles.screen}>
      <Header />
      <View style={{ flex: 1, width: '100%', padding: 20 }}>
        <Text style={styles.title}>ТЕСТ</Text>
        <Text>Вот тут просто немного разного текста. </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View>
            <Text style={styles.bold}>SMS</Text>
            <Text style={styles.text}>
              Харьков{'\n'}
              100 Харьков{'\n'}
              Tlf.: 341900{'\n'}
              sms@sms.fo
            </Text>
          </View>
        </View>
        <Text style={styles.title}>ТЕСТ</Text>
        <Text>Вот тут просто немного разного текста. </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
})
