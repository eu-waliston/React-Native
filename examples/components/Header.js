import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={header.headerContainer}>
      <Text style={header.textStyle}>App Musica</Text>
    </View>
  );
};

const header = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#FFF",
    padding: 20,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 30,
    color: "#116D6E",
    fontWeight: "bold"
  },
});

export default Header;
