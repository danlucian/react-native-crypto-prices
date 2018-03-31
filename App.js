import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/redux';
import { Header, Container } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <Container />
        </View>
      </Provider>
    );
  }
}