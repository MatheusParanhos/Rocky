import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../../../shared/components/Button";
import JackJane from "../components/JackJade";
import WatchResult from "../components/WatchResult";

export default class WatchContainer extends Component {
  constructor(props) {
    super(props);
    // Initialize states
    this.state = {
      JackChoice: "",
      JadeChoice: "",
      result: "",
      countdown: null,
      isPlaying: false
    };
  }
  /**
   *   JokenPo function
   *
   *
   */

  JokenPo() {
    // Reinitialize state
    this.setState({
      result: "",
      JackChoice: "",
      JadeChoice: "",
      isPlaying:true
    });
    // Initialize variables
    let result = "";
    let JadeChoice = "";
    let JackChoice = "";
    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
      case 0:
        JadeChoice = "rock";
        break;
      case 1:
        JadeChoice = "paper";
        break;
      case 2:
        JadeChoice = "scissors";
        break;
    }

    const randomNumber2 = Math.floor(Math.random() * 3);

    switch (randomNumber2) {
      case 0:
        JackChoice = "rock";
        break;
      case 1:
        JackChoice = "paper";
        break;
      case 2:
        JackChoice = "scissors";
        break;
    }
    // Initialize Countdown
    this.setState({
      countdown: 3
    });

    startCountdown = () => {
      this.handleClock = setInterval(() => {
        decrementClock();
      }, 1000);
    };

    decrementClock = () => {
      if (this.state.countdown === 1) clearInterval(this.handleClock);
      this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      if (this.state.countdown === 0) this.setState({ countdown: null})
      if (this.state.countdown < 0) this.setState({ countdown: null})
    };

    // Start Countdown
    startCountdown();

    // -old solution-
    // Compare answers
    // let compare = function(JackChoice, JadeChoice) {
    //   if (JackChoice === JadeChoice) {
    //     result = "Oh no, it's a draw!";
    //   } else if (JackChoice === "scissors" && JadeChoice === "paper") {
    //     result = "Jack won!";
    //   } else if (JackChoice === "rock" && JadeChoice === "scissors") {
    //     result = "Jack won!";
    //   } else if (JackChoice === "paper" && JadeChoice === "rock") {
    //     result = "Jack won!";
    //   } else {
    //     result = "Jade won!";
    //   }
    // };
    let compare = function(JackChoice, JadeChoice) {
      // Here we define a constraint that will dictate rules for the winner
      // This way we can achieve the so called 'extensibility' of code,
      // becoming easier to scale into more/different set of rules
      let constraint = { paper: "rock", scissors: "paper", rock: "scissors" };

      if (JadeChoice === constraint[JackChoice]) {
        result = "Jack won!";
      } else {
        result = "Jade won!";
      }
      if (JackChoice === JadeChoice) {
        result = "Oh no, it's a draw!";
      }
    };
    // Call compare function
    compare(JackChoice, JadeChoice);

    // Set state of result
    this.countdown = setTimeout(() => {
      this.setState({
        JadeChoice,
        JackChoice,
        result,
        isPlaying: false
      });
    }, 3000);
  }
  render() {
    return (
      <View style={styles.container}>
        <WatchResult
          result={this.state.result}
          countdown={this.state.countdown}
        />
        <JackJane
          jackChoice={this.state.JackChoice}
          jadeChoice={this.state.JadeChoice}
        />
        {this.state.isPlaying === false && (<Button
          title={"Rocky!"}
          onPress={() => {
            this.JokenPo();
          }}
        />)}
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
