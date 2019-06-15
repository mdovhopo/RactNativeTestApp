import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ImagePreview from "./src/components/ImagePreview";
import ImageProfile from "./src/components/ImageProfile";

const apiLink = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }


  // just stub, need to add caching for photos using redux
  componentDidMount(): void {
    console.log('i am about to fetch some data');
    fetch(apiLink)
      .then(res => res.json())
      .then(photos => {
        this.setState({photos: photos});
      })
      .catch(err => console.log('error! code: ' + err.code + ' ' + err.message));

  }

  render() {
    const images = this.state.photos.map((photo) => (
      <ImagePreview
        key={photo.id}
        photo={photo}
        {...this.props.navigation}
        />));
    return (
      <View>
       <ScrollView >
           {images}
       </ScrollView>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ImageProfile,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
