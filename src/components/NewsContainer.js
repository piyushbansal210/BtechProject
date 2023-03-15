import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';


export default function NewsContainer(props) {
  const { image_url, description, title} =
    props.data;
  // console.log(urlToImage)

  const openBlogPage = () => {
    props.navigation.navigate('BlogPage', {data: props.data});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => openBlogPage()}>
      <Image source={{uri: image_url?image_url : 'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'}} style={styles.imageNews} />
      <View style={{flex: 1}}>
        <Text style={styles.textTitle} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.textDescription} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    padding: 10,
  },
  imageNews: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  textTitle: {
    color: '#E0BC5E',
    fontFamily: 'PMedium',
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10,
  },
  textDescription: {
    color: 'white',
    fontFamily: 'PRegular',
    marginLeft: 10,
    marginTop: 7,
    marginRight: 10,
  },
});
