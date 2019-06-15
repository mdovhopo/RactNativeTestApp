import React, {Component}   from 'react';
import ImagePreview         from "./ImagePreview";
import {ScrollView, View}   from "react-native";
import {connect}            from "react-redux";
import loadItemsFromAPI     from "../util/loadItemsFromAPI";

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount(): void {
    const apiLink = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';
    this.props.dispatch(apiLink);
  }

  render() {
    const images = this.props.photos.map((photo) => (
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

const mapStateToProps = (state) => ({
  photos: state.Reducer.photos
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (url) => dispatch(loadItemsFromAPI(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);