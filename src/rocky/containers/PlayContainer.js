import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "../../shared/components/Button";
export default class PlayContainer extends Component {
  constructor(props) {
    super(props);
    // Initialize states
    this.state = {
      userChoice: "",
      computerChoice: "",
      result: ""
    };
  }
  componentDidMount() {
    this.JokenPo("rock");
  }
  //** JokenPo function
  JokenPo(userChoice) {
    // Initialize variables
    let result = "";
    let computerChoice = "";

    // Generates a random number
     const randomNumber = Math.floor(Math.random() * 3);
    //const randomNumber = 0
    switch (randomNumber) {
      case 0:
        computerChoice = "rock";
        break;
      case 1:
        computerChoice = "paper";
        break;
      case 2:
        computerChoice = "scissors";
        break;
    }

    // Compare answers
    let compare = function(computerChoice, userChoice) {
      if (computerChoice === userChoice) {
        result = "draw";
      }
      else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "computer won";
      } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "computer won";
      } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "computer won";
      } else {
        result = "user won";
      }
    };
    // Call compare function
    compare(computerChoice, userChoice);
    // Set result to state
    this.setState({
      result
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 100, width: 100, justifyContent: "center" }}>
          <Text>Hello</Text>
        </View>
        <Button title={"Rock"} />
        <Button title={"Paper"} />
        <Button title={"Scissors"} />
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
