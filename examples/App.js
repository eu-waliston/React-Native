import React from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <View style={{ marginTop: 20}}>
      <Header />
      <Body />
    </View>
  );
}

export default App;