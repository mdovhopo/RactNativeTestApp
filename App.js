import React, {Component}                             from 'react';
import { createStackNavigator, createAppContainer }   from 'react-navigation';
import ImageProfile                                   from "./src/components/ImageProfile";
import HomePage                                       from "./src/components/HomePage";
import {Provider}                                     from 'react-redux';
import configureStore                                 from "./src/redux/store/configureStore";
import loadItemsFromAPI                               from './src/util/loadItemsFromAPI';

const store = configureStore();
loadItemsFromAPI();

const RootStack = createStackNavigator(
  {
    Home: HomePage,
    Profile: ImageProfile,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

