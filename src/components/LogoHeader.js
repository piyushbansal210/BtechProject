import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from './Logo'

export default function LogoHeader() {
  return (
    <View style={styles.container}>
      <Logo/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        paddingVertical:7,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
})