import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import ListMensagens from '../../components/ListMen'
import { MensagemScreen } from './MensagemScreen'


export default function Feed() {
  return (
    <View style={styles.container}>
      <ListMensagens/>
    </View>
  )
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})