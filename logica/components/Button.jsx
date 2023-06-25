import React from "react";
import { View, Button,StyleSheet  } from "react-native";

const ButtonComponent = (props) => {

    function clickEffect(){
       console.log("Hey Listen");
    }

    return (
        <View>
            <Button title={props.titulo} onPress={clickEffect}/>
        </View>
    )
}

const btn = StyleSheet.create({
    effect: {
        opacity: 0.9,
        textTransform: "capitalize"
    }
})

export default ButtonComponent;