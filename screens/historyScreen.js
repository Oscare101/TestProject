import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import Header from '../components/header'
import data from '../data'

export default function HistoryScreen() {
  function renderHistoryItem({ item }) {
    return (
      <View style={styles.itemBlock}>
        <View style={{ width: '30%' }}>
          <Text style={styles.text}>{item.date}</Text>
        </View>
        <View style={{ width: '45%' }}>
          <Text style={styles.text}>{item.id}</Text>
        </View>
        <View style={{ width: '20%' }}>
          <Text style={styles.text}>Kr. {item.price}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Header />

      <View style={{ flex: 1, width: '100%', padding: 20 }}>
        <Text style={styles.title}>ТЕСТ</Text>

        <View style={styles.itemBlock}>
          <View style={{ width: '30%' }}>
            <Text style={styles.bold}>Дата</Text>
          </View>
          <View style={{ width: '45%' }}>
            <Text style={styles.bold}>Номер</Text>
          </View>
          <View style={{ width: '20%' }}>
            <Text style={styles.bold}>Цена</Text>
          </View>
        </View>
        <FlatList
          data={data}
          keyExtractor={() => Math.random().toString()}
          renderItem={renderHistoryItem}
        />
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
  itemBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  text: {
    textAlign: 'left',
    fontSize: 14,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
