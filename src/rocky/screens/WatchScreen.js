import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class WatchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Watch </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'white'
    }
  });