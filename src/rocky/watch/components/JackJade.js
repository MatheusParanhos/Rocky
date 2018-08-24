import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { deviceWidth } from "../../../theme/theme";
import Jack from './Jack'
import Jade from './Jade'
import PropTypes from 'prop-types'

export default class JackJade extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Jack jackChoice={this.props.jackChoice}/>
        <Jade jadeChoice={this.props.jadeChoice}/>
      </View>
    );
  }
}
JackJade.propTypes ={
  jadeChoice: PropTypes.string.isRequired,
  jackChoice: PropTypes.string.isRequired
}
JackJade.defaultProps = {
  jadeChoice: '',
  jackChoice: ''
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    width:deviceWidth,
    flexDirection:'row'
  },
  imageContainer: {
    width: 150,
    height: 150
  }
});
