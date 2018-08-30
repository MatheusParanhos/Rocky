import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Proptypes from "prop-types";

export const UserContext = React.createContext({
  user: "",
  setUser: () => {}
});
export default class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }
  // Initialize user state
  componentWillMount() {
    this.getState();
  }
  
  componentDidUpdate() {
    this.persistState({ ...this.state });
  }
  getState = () => {
    AsyncStorage.getItem("UserContext").then(response => {
      const parsedResult = JSON.parse(response);
      this.setState({ user: parsedResult.user });
    });
  };
  persistState = state => {
    const stateJson = JSON.stringify(state);
    AsyncStorage.setItem("UserContext", stateJson);
  };
  handleUserChange(user) {
    this.setState({ user });
  }
  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          setUser: user => {
            this.handleUserChange(user);
          }
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
