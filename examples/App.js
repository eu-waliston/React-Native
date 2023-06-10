import React from "react";
import { StyleSheet, Image, Text, View, Button } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#116D6E',
    flex: 1,
  }
})

export default App;