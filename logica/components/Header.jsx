import React from "react";
import { Text, View,StyleSheet } from "react-native";


const Header = () => {
  return (
    <View style={header.bar}>
      <Text style={header.text}>LOGICA</Text>
    </View>   
  )
}

const header = StyleSheet.create({
  bar: {
    backgroundColor: "#0E2954",
    marginTop: 25,
    width: '100%',
    flex: 0.07,
  },
  text: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    color: "#fff"
  }
})

export default Header;