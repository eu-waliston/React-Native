import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ButtonEffect = (props) => {
  const [num, setNum] = React.useState(0);

  const addMoreOne = () => {
    setNum(num + 1);
  };

  return (
    <View>
      <Text style={btnStyle.text}>{num}</Text>
      <Button title={props.titulo} onPress={addMoreOne} />
    </View>
  );
};

const btnStyle = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 50,
    marginTop: 30,
  },
});

export default ButtonEffect;
