import React, { Component } from 'react'
import { Text, View, StyleSheet, TimerMixin } from 'react-native'

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Splash </Text>
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