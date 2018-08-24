import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import PlayContainer from "../containers/PlayContainer";

export default class PlayScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
