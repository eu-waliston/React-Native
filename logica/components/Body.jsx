import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.nome = "Waliston"
  }

  chamarNome(){
    return (<Text>{this.nome}</Text>)
  }

  render() {
    return (
      <View style={bodyStyle.container}>
        <Text style={bodyStyle.text}>
          {this.chamarNome()}
        </Text>
      </View>
    );
  }
}

const bodyStyle = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    backgroundColor: "#A76F6F",
    flex: 1
  },
  text: {
    textAlign: "center",
  },
});
