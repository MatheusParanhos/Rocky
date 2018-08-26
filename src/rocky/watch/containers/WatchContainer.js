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
   * Reset previous state
   *
   */
  resetState() {
    // Reinitialize state
    this.setState(
      {
        result: "",
        JackChoice: "",
        JadeChoice: "",
        isPlaying: true
      },
      () => this.generateChoice()
      
    );
    return true
  }
  /**
   * Generate computer choice function
   *
   */
  generateChoice() {
    // Initialize variables
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
    const randomNumber1 = Math.floor(Math.random() * 3);
    switch (randomNumber1) {
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
    this.jokenPo(JackChoice, JadeChoice);
    return true
  }
  /**
   * Joken Po function
   * @param {string} JackChoice
   * @param {string} JadeChoice
    
   * Here we define a constraint that will dictate rules for the winner
     This way we can achieve the so called 'extensibility' of code,
     becoming easier to scale into more/different set of rules
   */
  jokenPo(JackChoice, JadeChoice) {
    let result = ''
    let constraint = { paper: "rock", scissors: "paper", rock: "scissors" };
    if (JackChoice === constraint[JadeChoice]) {
      result = "Jade won!!";
    } else {
      result = "Jack won!!";
    }
    if (JadeChoice === JackChoice) {
      result = "Fair enough, it's a draw!";
    }
    // Call setCountdown function
    this.setCountDown(JackChoice, JadeChoice, result);
    return true
  }

  /**
   * Set Countdown
   * @param {string} JackChoice
   * @param {string} JadeChoice
   * @param {string} result
   */
  setCountDown(JackChoice, JadeChoice, result) {
    // Initialize Countdown
    this.setState(
      {
        countdown: 3
      },
      () => this.countdownAndShowResults(JackChoice, JadeChoice, result)
    );
  }

  countdownAndShowResults(JackChoice, JadeChoice, result) {
    /**
     * Timer Functions
     * @param
     */
    this.startCountdown = () => {
      this.handleClock = setInterval(() => {
        this.decrementClock();
      }, 1000);
    };
    // Start Countdown
    this.startCountdown();

    // Decrement clock states to avoid unwanted behaviours
    this.decrementClock = () => {
      if (this.state.countdown === 1) clearInterval(this.handleClock);
      this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      if (this.state.countdown === 0) this.setState({ countdown: null });
      if (this.state.countdown < 0) this.setState({ countdown: null });
    };

    // Set state of result
    this.countdown = setTimeout(() => {
      this.setState({
        JackChoice,
        JadeChoice,
        result,
        isPlaying: false,
        firstTime: false
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
        {this.state.isPlaying === false && (
          <Button
            title={"Rocky!"}
            onPress={() => {
              this.resetState();
            }}
          />
        )}
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
