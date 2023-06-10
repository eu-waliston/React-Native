import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Minha Imagem</Text>
        <Image
          style={{ width: 150, height: 150 }}
          source={{
            uri: "https://storage.ko-fi.com/cdn/useruploads/display/39d7fa2f-9353-4cb1-91f9-7c5c1c2d4f61_0f217d0189f841ae794500966ab1845a.jpg",
          }}
        />
      </View>
    );
  }
}
