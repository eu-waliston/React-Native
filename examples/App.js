import React from "react";
import { StyleSheet, Image, Text, View, Button, ScrollView } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Body />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#116D6E',
    flex: 1,
    marginTop: 20,

  }
})



export default App;