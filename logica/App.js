import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,View } from "react-native";
import Header from "./components/Header";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App;