import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ButtonEffect from "./ButtonEffect";

const App = (props) => {
  return (
    <View style={bodyStyle.container}>
      {/* <Text style={bodyStyle.text}>
        {this.chamarNome()}
      </Text> */}
      <ButtonEffect titulo="ADD +" />
    </View>
  );
};

const bodyStyle = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    backgroundColor: "#A76F6F",
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});

export default App;