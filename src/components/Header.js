/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name='menu' size={30} color='white'/>
        <Text style={styles.title}>
          Office Hours
        </Text>
        <Icon name='menu' size={30} color='white'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    height:75,
    padding:8,
    paddingHorizontal:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    backgroundColor:'blue'
  },
  title:{
    color:'white',
    fontSize:20,
  }
});
