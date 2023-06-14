import React from "react";
import { StyleSheet, Image, Text, View, Button, ScrollView, Platform} from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";
// import { StatusBar } from "expo-status-bar";
import { Constants } from "expo-constants";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = false;
    // this.platforma = Platform.OS;
  }

  render() {
      return (
    <ScrollView style={styles.container}>
      {/* <StatusBar hidden /> */}
      <Header />
      <Body />
      {/* <Text>{this.platforma}</Text> */}
      
    </ScrollView>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#116D6E',
    flex: 1,
    marginTop: 24,

  }
})