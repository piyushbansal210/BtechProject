import {View, Text, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');


export default function BlogPage(props) {
  const { content, image_url, description, title} =
    props.route.params.data;
    
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Image source={{uri: image_url?image_url : 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'}} style={styles.imageStyle} />
      <Text style={styles.descStyle}>{description}</Text>
      <Text style={styles.contentStyle}>{content}</Text>
      <View
        style={{height:20}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D242E',
  },
  imageStyle: {
    width: width - 20,
    aspectRatio: 1.5,
    marginLeft: 10,
  },
  titleStyle:{
    color:'#DAA134',
    fontFamily:'CBold',
    fontSize:22,
    marginHorizontal:10,
    marginTop:10,
    marginBottom:10
  },
  descStyle:{
    fontFamily:'PSBold',
    color:'#dedede',
    marginHorizontal:10,
    marginTop:10
  },
  contentStyle:{
    fontFamily:'CRegular',
    color:'white',
    marginHorizontal:10,
    marginTop:10,
     lineHeight:20
  }
});
