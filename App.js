/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "./Navigation";
import UserContext from "./src/shared/containers/UserContext";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <UserContext>
        <Navigation />
      </UserContext>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
