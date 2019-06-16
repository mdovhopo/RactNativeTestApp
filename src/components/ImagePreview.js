import React, {Component}                                 from 'react';
import {TouchableOpacity, StyleSheet, Image, View, Text}  from 'react-native';
import ElevatedView                                       from 'react-native-elevated-view';

class ImagePreview extends Component {

  routeToImageProfile = () => (
    this.props.navigate('Profile', {photo: this.props.photo})
  );

  render() {
    return (
      <ElevatedView elevation={3} style={styles.stayElevated}>
      <TouchableOpacity style={styles.imagePreviewContainer} key={this.props.photo.id} onPress={this.routeToImageProfile}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: this.props.photo.urls.small}}
          />
        </View>
        <View style={styles.container}>
          <Text key='author'>Author: {this.props.photo.user.name}</Text>
          <Text key='inst'>Instagram @{this.props.photo.user.instagram_username}</Text>
        </View>
      </TouchableOpacity>
    </ElevatedView>
        );
  }
}

const styles = StyleSheet.create({
  imagePreviewContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  container: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  stayElevated: {
    margin: 5,
    backgroundColor: 'white'
  }
});

export default ImagePreview;