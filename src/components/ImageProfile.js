import React, {Component}                                               from 'react';
import {ScrollView, Dimensions, Image, StyleSheet, Text, View, Linking} from 'react-native';
import ElevatedView                                                     from 'react-native-elevated-view';


class ImageProfile extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const {urls, user} = this.props.navigation.getParam('photo', {});
    const screenWidth = Dimensions.get('window').width;
    const imageSize =  Math.round(screenWidth * 0.95);
    const redirectToInst = () => Linking.openURL(`instagram://user?username=${user.instagram_username}`).catch(err => console.log(err));
    console.log(urls.small);
    return (
      <ScrollView>
        <ElevatedView elevation={5} style={styles.stayElevated}>
        <Image
          style={ {width: imageSize, height: imageSize, borderRadius: 8}}
          source={{uri: urls.small}}
        />
        </ElevatedView>
          <View style={styles.container}>
            <Text onPress={redirectToInst} style={styles.text}>Follow Me: @{user.instagram_username}</Text>
            <Text style={styles.text}>Bio:</Text>
            <Text style={styles.text}>{user.bio === null ? 'there is no bio :(' : user.bio}</Text>
          </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  imageContainer: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 22,
  },
  container: {
    margin: 15,
    marginHorizontal: 10,
    marginBottom: 10
  },
  tableItem: {
    flex: 1,
    alignSelf: 'stretch'
  },
  stayElevated: {
    borderRadius: 8,
    margin: 8,
    backgroundColor: 'white'
  }
});

export default ImageProfile;