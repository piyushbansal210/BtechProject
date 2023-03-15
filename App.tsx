/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import Navigation from './src/navigation';

import DataProvider from './src/components/DataProvider';
import {DataContext} from './src/components/DataProvider';



function App() {
  const dataReader = useContext(DataContext);
    

  if (dataReader === null) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#1D242E'} />
      </SafeAreaView>
    );
  }
  return (
    <DataProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#1D242E'} />
        <Navigation />
      </SafeAreaView>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1D242E'
  },
});

export default App;
