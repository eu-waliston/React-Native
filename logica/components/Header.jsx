import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  const name = "Waliston";

  // var mostrar = true;
  // var conteudo = "";
  // if (mostrar) {
  //   conteudo = <Text>Danki Code</Text>;
  // } else {
  //   conteudo = <Text>No Code</Text>;
  // }
  var component = [];
  for (let i = 0; i <= 10; i++) {
      component[i] = <Text>Selecione: {i}</Text>
  }

  return (
    <View style={header.container}>
      <View style={header.bar}>
        <Text style={header.text}>Olá, {name}</Text>
      </View>
      {/* {conteudo} */}
      {
        component.map((elem) => {
          return (elem)
        })
      }
    </View>
  );
};

const header = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    backgroundColor: "#0E2954",
    marginTop: 25,
    width: "100%",
    flex: 0.07,
  },
  text: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Header;
