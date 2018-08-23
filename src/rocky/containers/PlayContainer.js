import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import {Button} from '../../shared/components/Button';
export default class PlayContainer extends Component {
  constructor(props) {
    super(props);
    // Initialize states 
    this.state = { 
      userChoice: "", 
      computerChoice: "", 
      result: "" };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button />
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
