/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Button,
    FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    constructor(){
        super();
        this.state = {refreshing : false};
    }

  render() {
    return (
      <View style={styles.container}>
          <FlatList
              data={[{key: 'aaaaaaaaaa'}, {key: 'bbbbbbbbbbbbbb'}]}
              renderItem={({item}) => <Text style={{width: 200, fontSize:20}}>{item.key}</Text>}
              refreshing ={this.state.refreshing}
              onRefresh ={this.onRefresh}
          />
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
          <Button
              title = {'Click to Refresh'}
              onPress = {this.onRefresh}
          ></Button>
          <Button
              title = {'Click to Stop'}
              onPress = {this.onStop}
          ></Button>
      </View>
    );
  }

  onRefresh = ()=>{
      this.setState({refreshing : true});
  }
    onStop = ()=>{
            this.setState({refreshing : false});
    }

}

const styles = StyleSheet.create({
  container: {
      flexDirection : 'column',
      padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
