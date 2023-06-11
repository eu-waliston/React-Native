import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Body = () => {
  return (
    <View style={bodyStyle.container}>
      <Image
        style={bodyStyle.tinyLogo}
        source={{
          uri: "https://i.pinimg.com/originals/a9/91/61/a9916198fa7102172dceb627e91e3f00.jpg",
        }}
      />

      <Text style={bodyStyle.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident
        aspernatur consequuntur sunt, rem eius, repellendus consequatur optio
        at, ut voluptatum! Dignissimos laudantium molestias hic, labore quaerat
        quasi illum reprehenderit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eaque provident aspernatur consequuntur sunt, rem
        eius, repellendus consequatur optio at, ut voluptatum! Dignissimos
        laudantium molestias hic, labore quaerat quasi illum reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident
        aspernatur consequuntur sunt, rem eius, repellendus consequatur optio
        at, ut voluptatum! Dignissimos laudantium molestias hic, labore quaerat
        quasi illum reprehenderit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eaque provident aspernatur consequuntur sunt, rem
        eius, repellendus consequatur optio at, ut voluptatum! Dignissimos
        laudantium molestias hic, labore quaerat quasi illum reprehenderit.
      </Text>
    </View>
  );
};

const bodyStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 30,
  },
  title: {
    width: "100%",
    padding: 20,
  },
  tinyLogo: {
    width: 90,
    height: 90,
    justifyContent: "center"
  },
});
export default Body;
