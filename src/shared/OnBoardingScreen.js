import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../theme/theme";
import { UserContext } from "./containers/UserContext";

export class OnBoardingScreen extends Component {

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <View style={styles.container}>
            <Text style={styles.text}> {user}</Text>
          </View>
        )}
      </UserContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  text: {
    fontSize: 100,
    fontFamily: "SignatraDEMO",
    color: colors.white
  }
});

export default Splash;
