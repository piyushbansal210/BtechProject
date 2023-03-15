import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>LTA</Text>
      <Text style={styles.logoText}>MEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    logoText:{
        color:'#DAA134',
        fontFamily:'CBold'
    }
})