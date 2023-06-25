import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ButtonComponent from "./Button";

const App = (props) => {
  return (
    <View style={bodyStyle.container}>
      {/* <Text style={bodyStyle.text}>
        {this.chamarNome()}
      </Text> */}
      <ButtonComponent titulo="Teste" />
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