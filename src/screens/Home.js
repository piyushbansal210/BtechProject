import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Legal Text</Text>
        <Text style={[styles.title,{marginTop:-15}]}>to</Text>
        <View style={{flexDirection: 'row', marginTop:-15}}>
          <Text style={styles.titleLaymen}> Laymen</Text>
          <Text style={styles.title}> Text</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStarted} onPress={()=>navigation.navigate('Main')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D242E',
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    color: 'white',
    fontFamily: 'CBold',
    fontSize: 55,
  },
  titleLaymen: {
    color: '#DAA134',
    fontFamily: 'CBold',
    fontSize: 55,
  },
  titleContainer:{
    alignItems:'center'
  },
  buttonStarted:{
    backgroundColor:'white',
    paddingHorizontal:70,
    paddingVertical:10,
    marginTop:20,
    borderRadius:10
  },
  buttonText:{
    color:'#DAA134',
    fontFamily:'PSBold'
  }
});
